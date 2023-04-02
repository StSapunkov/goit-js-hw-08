import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector(".feedback-form");
const FORM_KEY = "feedback-form-state";

// Отримання значення та його збереження, додавання слухача і оновлення через 500 млс.

const onFormInput = () => {
    const formData = new FormData(feedbackForm);
    let userForm = {};
    formData.forEach((value, name) => userForm[name] = value.trim());
    localStorage.setItem(FORM_KEY, JSON.stringify(userForm));
};

feedbackForm.addEventListener("input", throttle(onFormInput, 500));


// Отримання даних з локального сховища.

const onPopulateForm = () => {
    if (localStorage.getItem(FORM_KEY)) {
        Object.entries(JSON.parse(localStorage.getItem(FORM_KEY))).forEach(([name, value]) => feedbackForm.elements[name].value = value);    }
};

onPopulateForm();

// Відправка даних та їх очищення.

const onFormSubmit = event => {
    event.preventDefault();
    if (feedbackForm.elements.email.value && feedbackForm.elements.message.value !== "") {
        console.log('Відправляємо форму з даними: ', JSON.parse(localStorage.getItem(FORM_KEY)));
        event.currentTarget.reset();
        localStorage.removeItem(FORM_KEY);
    };
};
  
feedbackForm.addEventListener("submit", onFormSubmit);

