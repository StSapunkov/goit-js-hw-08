const iFrameEl = document.querySelector('#vimeo-player');
import throttle from 'lodash.throttle';

// Створення плеєра

const player = new Vimeo.Player(iFrameEl);

// Збереження в локальному сховищі

const onTimeUpdate = date => {
    localStorage.setItem('videoplayer-current-time', date.seconds);
    console.log(parseInt(localStorage.getItem('videoplayer-current-time')));
};

// Оновлення часу 

player.on('timeupdate', throttle(onTimeUpdate, 1000));

// Відновлення відтворення на місце, де була зупинка. 

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .then(function (seconds) { })
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

