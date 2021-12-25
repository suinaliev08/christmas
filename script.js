setInterval(CreateSnowFlake, 10);

function CreateSnowFlake() {
    const snowflake = document.createElement('i');
    snowflake.classList.add('fas');
    snowflake.classList.add('fa-snowflake');
    snowflake.classList.add('snow');

    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';

    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

let sound = new Audio('deckTheHalls2.mp3');

const iconS = document
    .querySelector('.sound-place i')
    .addEventListener('click', () => {
        if (sound.paused) {
            sound.play();
        } else {
            sound.pause();
        }
    });
