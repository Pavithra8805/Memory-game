document.addEventListener("DOMContentLoaded", function () {
    let moves = 0;
    let matchedPairs = 0;
    let selectedCards = [];
    let lockBoard = false;

    const cards = document.querySelectorAll(".box");
    const resultScreen = document.getElementById("result");
    const message = document.getElementById("message");
    const playAgainButton = document.getElementById("button");

    const movesCount = document.querySelector("#moves-count span");

        const timeElement = document.querySelector("#timer");
    console.log(timeElement)
    
    shuffleCards();

    cards.forEach((card) => {
        card.addEventListener("click", flipCard);
    });

    function shuffleCards() {
        cards.forEach((card) => {
            let randomPos = Math.floor(Math.random() * 16);
            card.style.order = randomPos;
        });
    }


    function flipCard() {
        if (lockBoard) return;
        if (this === selectedCards[0]) return;

        displayCardContent(this);

        selectedCards.push(this);

        if (selectedCards.length === 2) {
            checkForMatch();
            updateMovesCount();
        }
    }


    function displayCardContent(card) {
        const face = card.querySelector(".face");
        const mark = card.querySelector(".mark");

        face.style.display = "flex";
        mark.style.display = "none";
    }


    function checkForMatch() {
        const [firstCard, secondCard] = selectedCards;

        if (getCardContent(firstCard) === getCardContent(secondCard)) {
            disableCards();
            matchedPairs++;
            console.log( matchedPairs);
            if (matchedPairs === 8) {

                displayResult("Congratulations! You won!");
                localStorage.setItem("win",1)
                window.location.href="./gameover.html";
            }
        } else {
            lockBoard = true;
            setTimeout(() => {
                hideCardContent(firstCard);
                hideCardContent(secondCard);
                resetBoard();
            }, 1000);
        }
    }

    function getCardContent(card) {
        return card.querySelector(".face").innerHTML;
    }



    function hideCardContent(card) {
        const face = card.querySelector(".face");
        const mark = card.querySelector(".mark");

        face.style.display = "none";
        mark.style.display = "flex";
    }

    function disableCards() {
        selectedCards.forEach((card) => {
            card.removeEventListener("click", flipCard);
        });
        resetBoard();
    }


    function resetBoard() {
        [lockBoard, selectedCards] = [false, []];
    }



    function updateMovesCount() {
        moves++;
        movesCount.textContent = moves;
        localStorage.setItem("moves",movesCount.textContent)
        
    }


    
    function displayResult(msg) {
        message.textContent = msg;
        resultScreen.style.visibility = "visible";
    }


    playAgainButton.addEventListener("click", function () {

        moves = 0;
        matchedPairs = 0;
        selectedCards = [];
        lockBoard = false;

        cards.forEach((card) => {
            card.addEventListener("click", flipCard);
            hideCardContent(card);
        });

        movesCount.textContent = moves;
        

        //
        resultScreen.style.visibility = "hidden";
        resultScreen.style.opacity = "0";

        shuffleCards();
    });
    

});

let timerspan = document.getElementById("timer");
let time=60;
function countDown() {

    if(time==0){
        localStorage.setItem("win",0)
        window.location.href="./gameover.html"
    }
    timerspan.innerText=time;
    time--;
}
setInterval(countDown, 1000);

// Game over function
    function gameOver(msg) {
        
        message.textContent = msg;
    }
