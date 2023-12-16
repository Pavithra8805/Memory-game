const startButton = document.getElementById("start");

startButton.onclick = () => {

    window.location.href = "./Memory.html";
};

const instButton = document.getElementById("instructions");

instButton.onclick = () => {

    window.location.href = "./instructions.html";
};

var userInput = document.getElementById("playerDetail");
var user1 = document.getElementById("user1");
var user2 = document.getElementById("user2");

userInput.onsubmit = (e) => {
    e.preventDefault()
    console.log(user1.value)
    window.location.href = "./instructions.html";
}