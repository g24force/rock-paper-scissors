function getComputerChoice () {
    let randomNumber = Math.ceil(Math.random() * 3);
    if (randomNumber === 1) {
        return 'Rock';
    } else if (randomNumber === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    };
};

const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay= document.querySelector('#computer-score');
const resultDisplay = document.querySelector('#round-winner')
const display = document.querySelector('#display')

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    resultDisplay.textContent = playRound ('Rock');
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    resultDisplay.textContent = playRound ('Paper');
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    resultDisplay.textContent = playRound ('Scissors');
})

const gameWinner = document.querySelector('#game-winner')

let playerScore = 0;
let computerScore = 0;

function roundResult (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    } else {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    };
}

const restartButton = document.createElement('button');
restartButton.textContent = "Restart game";
restartButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    resultDisplay.textContent = '';
    gameWinner.textContent = '';
    display.removeChild(restartButton);
})

function playRound (playerChoice) {
    console.log(playerScore, computerScore)
    if (playerScore <= 4 && computerScore <= 4) {
        return roundResult(playerChoice, getComputerChoice());
    } else if (playerScore === 5) {
        gameWinner.textContent = 'Player wins the game!';
        display.appendChild(restartButton);
    } else if (computerScore === 5) {
        gameWinner.textContent = 'Computer wins the game!';
        display.appendChild(restartButton);
    }
};