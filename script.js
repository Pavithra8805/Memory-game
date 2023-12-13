const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");

const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");

let firstCard = false;
let secondCard = false;

//Items array
const images = [
    "😇",
    "🥳",
    "😴",
    "🤣",
    "😎",
    "😂",
    "😜",
    "🤩",
];

let timerDiv = document.getElementById("time");

function countDown() {
    localStorage.setItem("time", time);

    if (time == 0) {
        timerDiv.innerText = time;
        time--;
    } else {
        window.location.href = "./gameover.html";
    }
}

setInterval(countDown, 1000);

