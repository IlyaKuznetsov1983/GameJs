const startBtn = document.getElementById("start");
const slot = document.querySelectorAll(".slot");
const timeController = document.getElementById("time-list");
const timeEl = document.getElementById("time");
const boardEl = document.getElementById("board");
const modalWindow = document.querySelector(".modal")
const finishButtons = document.querySelector(".modal__finish-buttons")
const modal = document.querySelector(".modal__score")

let time = 0;
let score = 0;
let idSetInterval = 0;
let timeValue =0;

startBtn.addEventListener("click", handlerStartBtn);

function handlerStartBtn(e) {
  e.preventDefault();
  slot[0].classList.add("up");
}

timeController.addEventListener("click", handlerTimeController);

function handlerTimeController(e) {
  if (e.target.classList.contains("time-list__button")) {
    slot[1].classList.add("up");
    time = parseInt(e.target.dataset.time);
  }
}

boardEl.addEventListener("click", handlerCircleClick);

function handlerCircleClick(e) {
  if (e.target.classList.contains("circle")) {
    score++;
    e.target.remove();
    createRandomCircle();
  }
  createRandomCircle();
}

function createRandomCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  const size = getRandomNum(5, 50);
  const a = boardEl.getBoundingClientRect();
  circle.style.width = circle.style.height = size + "px";
  circle.style.background = "#fff";
  const x = getRandomNum(0, width - size);
  const y = getRandomNum(0, height - size);
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  boardEl.append(circle);
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setTime(timeGame) {
  timeEl.innerHTML = `<span id="time">${timeGame}</span></h2>`;
}

function startGame() {
  idSetInterval = setInterval(decTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }

    setTime(current);
  }
}

function finishGame() {
  scoreElement.innerHTML = score;
  modal.classList.add("open");
  clearInterval(idSetInterval);
  
}

modal.addEventListener("click", handlerModalClick);

function resetGame(){
  this.classList.remove("open");
  time = selectedTime;
  score = 0;
}

function handleModalclick(e) {
  if(e.target.classList.contains("modal__restartBtn")){
    resetGame.call(this);
    startGame();
  }
  if(e.target.classList,contains("modal__canselBtn")){
    resetGame.call(this);
    slot.forEach((slot) => slot,classList.remove("up"));
  }
}
