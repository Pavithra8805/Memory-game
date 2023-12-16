var wonOrLost = document.getElementById('wonOrLost')
var win = localStorage.getItem('win')


var moves = localStorage.getItem("moves")
var totalMoves=document.getElementById("totalmoves")

var winAudio = new Audio("assests/crowd-cheer-ii-6263.mp3")
var TimeUpAudio = new Audio("assests/mixkit-lose-life-falling-2029 (1).wav")

if(win==0){
    wonOrLost.textContent="Time is up 😔"
    totalMoves.textContent=moves
    TimeUpAudio.play();
    TimeUpAudio.loop=true;
}else if(win==1){
    wonOrLost.textContent="Congratulations!!! You won🥳🎉"
    totalMoves.textContent=moves
    winAudio.play();
    winAudio.loop=true;
}

const playAgainButton = document.getElementById("button");

playAgainButton.onclick = () => {

    window.location.href = "./Memory.html";
};