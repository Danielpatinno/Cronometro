const minutosEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const miliSecondsEl = document.getElementById("miliseconds");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");
const resetBtn = document.getElementById("resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let miliSeconds = 0;
let pausa = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", continuarTimer);
resetBtn.addEventListener("click", resetarTimer)


function startTimer() {
    pausa = false;
    interval = setInterval(() => {

        if(!pausa){

            miliSeconds += 10;

            if(miliSeconds === 1000){
               seconds++;
               miliSeconds = 0; 
            }

            if(seconds === 60) {
                minutes++
                seconds = 0;
            }

            minutosEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            miliSecondsEl.textContent = formatMiliseconds(miliSeconds);
        }

    }, 10)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
};

function pauseTimer() {
    pausa = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function continuarTimer() {
    pausa = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function resetarTimer() {
    clearInterval(interval)

    minutes = 0;
    seconds = 0;
    miliSeconds = 0;

    minutosEl.textContent = "00"
    secondsEl.textContent = "00"
    miliSecondsEl.textContent = "00"

    startBtn.style.display = "block";
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMiliseconds(time){
    return time < 100 ? `${time}`.padStart(3,"0") : time
}