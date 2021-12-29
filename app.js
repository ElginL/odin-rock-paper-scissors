function computerPlay() {
    const randIndex = Math.floor(Math.random() * 3);
    const possibilities = ["rock", "paper", "scissors"];
    return possibilities[randIndex];
}

function playRound(playerSelection, computerSelection) {
    const playerSelectionUpper = playerSelection.toUpperCase();
    const computerSelectionUpper = computerSelection.toUpperCase();

    if (playerSelectionUpper === computerSelectionUpper) {
        return "Draw!";
    }
    
    if (computerSelectionUpper === "ROCK") {
        if (playerSelectionUpper === "PAPER") {
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose! Rock beats Scissors";
        }
    }

    if (computerSelectionUpper === "SCISSORS") {
        if (playerSelectionUpper === "ROCK") {
            return "You Win! Rock beats Scissors";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    }

    if (computerSelectionUpper === "PAPER") {
        if (playerSelectionUpper === "SCISSORS") {
            return "You Win! Scissors beats Paper";
        } else {
            return "You Lose! Paper beats Rock";
        }
    }
}

function playerPlayHandler(e) {
    const playerSelection = e.target.getAttribute("data-value");
    const opponentSelection = computerPlay();
    const resultMessage = playRound(playerSelection, opponentSelection);
    
    // Update image in play box
    playerSelectionImg.setAttribute("src", `images/${playerSelection}.png`);
    opponentSelectionImg.setAttribute("src", `images/${opponentSelection}.png`);


    // Update score magnitudes
    if (resultMessage.includes("Win")) {
        playerScore.textContent = +playerScore.textContent + 1;
    } else if (resultMessage.includes("Lose")) {
        opponentScore.textContent = +opponentScore.textContent + 1;
    }

    // Update text after round
    if (playerScore.textContent === "5") {
        modal.classList.remove("modal");
        modal.classList.add("modal-open");
        modalInformation.textContent = "Congratulations, you won";
    } else if (opponentScore.textContent === "5") {
        modal.classList.remove("modal");
        modal.classList.add("modal-open");
        modalInformation.textContent = "You lost to a bot!";
    } else {
        roundResult.textContent = resultMessage;
    }

}

function restartBtnHandler() {
    modal.classList.remove("modal-open");
    modal.classList.add("modal");
    playerScore.textContent = 0;
    opponentScore.textContent = 0;
    roundResult.textContent = "";
}

const roundResult = document.querySelector(".round-result");
const playerScore = document.getElementById("player-score");
const opponentScore = document.getElementById("opponent-score");
const selectionImages = document.querySelectorAll(".selection-img");
const playerSelectionImg = selectionImages[0];
const opponentSelectionImg = selectionImages[1];
const modal = document.querySelector(".modal");
const modalInformation = modal.querySelector(".modal-information-text");
const restartButton = document.querySelector(".restart-btn");

const buttons = Array.from(document.querySelectorAll(".selection-btn"));
buttons.forEach(button => button.addEventListener("click", playerPlayHandler));

restartButton.addEventListener("click", restartBtnHandler);