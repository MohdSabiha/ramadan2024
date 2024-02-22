const daysEl = document.getElementById("dayscountdown");
const hoursEl = document.getElementById("hourscountdown");
const minsEl = document.getElementById("minscountdown");
const secondsEl = document.getElementById("secscountdown");

const Ramadan = "10 March 2024";

function countdown() {
    const RamadanDate = new Date(Ramadan);
    const currentDate = new Date();

    const totalSeconds = (RamadanDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);