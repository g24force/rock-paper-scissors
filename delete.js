/*
1. Ter a resposta do computador
2. Ter a resposta do user
3. Comparar as duas e ver quem ganhou
*/

function getComputerChoice () {
    let randomNumber = Math.ceil(Math.random() * 3);
    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    };
};

function roundResult (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.toLowerCase();
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
    return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    for (i = 1; i <= 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("What do you want to play?"); //isto está a dar TypeError pq estou a passar por cima da linha 19 acho
        console.log(roundResult (playerSelection, computerSelection));
    }
}

console.log(game());