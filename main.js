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

let playerScore = 0;
let computerScore = 0;

const currentScore = document.querySelector('#current-score');

// for (i = 1; i <= playerScore || i <= computerScore; i++) {
    function roundResult (playerSelection, computerSelection) {
        console.log(playerSelection)
        console.log(computerSelection)
        if (playerSelection === computerSelection) {
            return "It's a draw!";
        } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
            playerScore = playerScore + 1;
            currentScore.textContent = "Player " + playerScore + " : " + computerScore;
            return 'You win! ' + playerSelection + ' beats ' + computerSelection;
        } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
            playerScore = playerScore + 1;
            currentScore.textContent = "Player " + playerScore + " : " + computerScore;
            return 'You win! ' + playerSelection + ' beats ' + computerSelection;
        } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
            playerScore = playerScore + 1;
            currentScore.textContent = "Player " + playerScore + " : " + computerScore;
            return 'You win! ' + playerSelection + ' beats ' + computerSelection;
        } else {
            computerScore = computerScore + 1;
            currentScore.textContent = "Player " + playerScore + " : " + computerScore;
            return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
        };
    }  
// }

const resultDisplay = document.querySelector('#result-display')

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    resultDisplay.textContent = roundResult ('Rock', getComputerChoice());
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    resultDisplay.textContent = roundResult ('Paper', getComputerChoice());
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    resultDisplay.textContent = roundResult ('Scissors', getComputerChoice());
})