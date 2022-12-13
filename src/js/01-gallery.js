import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery'); 


// Завдання 8.1.2

const galleryMarkup = galleryItems
    .map(({ original, preview, description }) => `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        alt="${description}"
                    />
                </a>
            </div>`)
    .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

console.log(galleryEl);

const lightboxOptions = {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
};

const lightboxGallery = new SimpleLightbox(".gallery a", lightboxOptions);
console.log(galleryItems);