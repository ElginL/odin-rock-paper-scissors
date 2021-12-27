function computerPlay() {
    const randIndex = Math.floor(Math.random() * 3);
    const possibilities = ["Rock", "Paper", "Scissors"];
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

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;

    // Play 5 Rounds
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What is your pick?\n");
        const message = playRound(playerSelection, computerPlay());

        if (message.includes("Win")) {
            playerWinCount++;
        } 
        if (message.includes("Lose")) {
            computerWinCount++;
        }

        console.log(message);
    }

    // Print the overall winner
    if (playerWinCount > computerWinCount) {
        console.log("Your are the winner!");
    } else if (playerWinCount === computerWinCount) {
        console.log("Draw!");
    } else {
        console.log("You lost to a Bot!");
    }
}

game();