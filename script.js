const image = document.querySelector(".image");
const addButton = document.querySelector(".add-task-button");
const inputTextBox = document.querySelector(".input-text-box");
const taskList = document.querySelector(".task-list");
let interval;
let isRunning;

function getApi() {
  fetch("https://api.otakugifs.xyz/gif/allreactions")
    .then((response) => response.json())
    .then((data) => {
      let randomReaction =
        data.reactions[Math.floor(Math.random() * data.reactions.length)];
      fetch(`https://api.otakugifs.xyz/gif?reaction=${randomReaction}`)
        .then((response) => response.json())
        .then((data) => {
          image.src = data.url;
        });
    });
}

getApi();

function changeImage() {
  image.src = "./img/Loading_icon.gif";
  getApi();
}

image.addEventListener("click", changeImage);

let numberTasks = 0;

addButton.addEventListener("click", function (event) {
  event.preventDefault();
  let newLi = document.createElement("li");
  newLi.innerHTML = `${inputTextBox.value}<i class="trash fa-solid fa-trash"></i>`;
  newLi.classList.add("task-item");
  inputTextBox.value = "";

  if (newLi.innerText != "") {
    taskList.appendChild(newLi);
    numberTasks++;
    console.log(numberTasks);
  }

  let trash = newLi.querySelector(".trash");
  trash.addEventListener("click", function () {
    newLi.remove();
    numberTasks--;
    console.log(numberTasks);
    addButton.removeAttribute("disabled");
  });

  if (numberTasks >= 6) {
    addButton.setAttribute("disabled", true);
  } else {
    addButton.removeAttribute("disabled");
  }
});

const pomodoro25min = document.querySelector(".pomodoro-min");

const pomodoroTimer = document.querySelector(".timer");
const pomodoroMinutes = document.querySelector(".minutes");
const pomodoroSeconds = document.querySelector(".seconds");

let timeMinutes = 25;
let timeSeconds = 0;

const pomodoroMin = document.querySelector(".pomodoro-min");
pomodoroMin.addEventListener("click", function () {
  timeMinutes = 24;
  timeSeconds = 59;

  clearInterval(interval);

  pomodoroMinutes.innerText = "25";
  pomodoroSeconds.innerText = "00";

  isRunning = false;
});

const shortBreak = document.querySelector(".short-break");
shortBreak.addEventListener("click", function () {
  timeMinutes = 4;
  timeSeconds = 59;
  clearInterval(interval);

  pomodoroMinutes.innerText = 5;
  pomodoroSeconds.innerText = "00";

  isRunning = false;
});

const longBreak = document.querySelector(".long-break");
longBreak.addEventListener("click", function () {
  timeMinutes = 14;
  timeSeconds = 59;

  clearInterval(interval);

  pomodoroMinutes.innerText = 15;
  pomodoroSeconds.innerText = "00";

  isRunning = false;
});

const pomodoroStart = document.querySelector(".start");

pomodoroStart.addEventListener("click", countdownSeconds);

function countdownSeconds() {
  if (isRunning) {
    return;
  }
  isRunning = true;

  interval = setInterval(function () {
    timeSeconds -= 1;
    if (timeSeconds <= -1) {
      timeSeconds = 59;
      timeMinutes -= 1;
    } else if (timeSeconds < 10) {
      timeSeconds = "0" + timeSeconds;
    } else if (timeSeconds > 10) {
      timeSeconds = Number(timeSeconds);
    }
    pomodoroMinutes.innerText = timeMinutes;
    pomodoroSeconds.innerText = timeSeconds;

    if (timeMinutes <= -1) {
      pomodoroMinutes.innerText = "0";
      pomodoroSeconds.innerText = "00";
      clearInterval(interval);
    }
  }, 100);
}

const pomodoroPause = document.querySelector(".pause");

function isRunningFalse() {
  clearInterval(interval);
  isRunning = false;
}

pomodoroPause.addEventListener("click", isRunningFalse);
