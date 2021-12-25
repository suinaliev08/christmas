const clock = document.querySelector('.clock');
const day = document.querySelector('.day span');
const hours = document.querySelector('.hour span');
const mn = document.querySelector('.minute span');
const sc = document.querySelector('.s span');
let counterDown = new Date('Jan 1, 2022 00:00:00').getTime();

function timer() {
    let timeNow = new Date().getTime();
    let diffence = counterDown - timeNow;
    let days = Math.floor(diffence / (1000 * 60 * 60 * 24));
    let h = Math.floor((diffence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((diffence % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((diffence % (1000 * 60)) / 1000);

    if (days < 10) {
        days = '0' + days;
    }
    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }

    day.innerHTML = `${days}:`;
    hours.innerHTML = `${h}:`;
    mn.innerHTML = `${m}:`;
    sc.innerHTML = `${s}`;
    if (diffence < 0) {
        clearInterval(Interval);
        clock.innerHTML = 'Time end';
    }
}
timer();
let Interval = setInterval(timer, 1000);
