var wonOrLost = document.getElementById('wonOrLost')
var win = localStorage.getItem('win')


var moves = localStorage.getItem("moves")
var totalMoves=document.getElementById("totalmoves")


if(win==0){
    wonOrLost.textContent="Time is up 😔"
    totalMoves.textContent=moves
}else if(win==1){
    wonOrLost.textContent="Congratulations!!! You won🥳🎉"
    totalMoves.textContent=moves
}

const playAgainButton = document.getElementById("button");

playAgainButton.onclick = () => {

    window.location.href = "./Memory.html";
};