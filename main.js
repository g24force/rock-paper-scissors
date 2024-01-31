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

function roundResult (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.toLowerCase();
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    } else {
    return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}
const div = document.querySelector('div')

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    div.textContent = roundResult ('Rock', getComputerChoice());
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    div.textContent = roundResult ('Paper', getComputerChoice());
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    div.textContent = roundResult ('Scissors', getComputerChoice());
})

// function 