const possibleValues = ['rock', 'paper', 'scissors'];
let userChoice;
let userScore = 0;
let computerChoice;
let computerScore = 0;

let isResetButtonAppended = false;
let alreadyCalledWinner = false;

const buttons = document.querySelectorAll('.choiceButton');
const container = document.querySelector('#container');
const resultContainer = document.querySelector('#results');
const userChoiceDisplay = document.querySelector('#user-choice');
const computerChoiceDisplay = document.querySelector('#computer-choice');
const displayContainers = document.querySelectorAll('.choices');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.id;
        computerChoice = getComputerChoice();
        playRound(userChoice,computerChoice);
        displayChoice(userChoice,computerChoice);
        updateScoreText();
        if(userScore === 5 || computerScore === 5) {
            alert(winner(userScore, computerScore));
            if (!isResetButtonAppended) {
                const resetButton = document.createElement('button');
                resetButton.textContent = "RESET";
                resetButton.addEventListener('click', () => {
                    userScore = 0;
                    computerScore = 0;
                    resultContainer.textContent = `Click a button to start!`;
                    container.removeChild(resetButton);
                    isResetButtonAppended = false;
                })
                container.appendChild(resetButton);
                isResetButtonAppended = true;
            }
        }
    })
})

function updateScoreText() {
    resultContainer.textContent = `Your score is: ${userScore}\n The machine score is: ${computerScore}.`;
}

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * possibleValues.length);
    let computerChoice = possibleValues[randomIndex];
    return computerChoice;
}

function playRound(userChoice, computerChoice) {
    if (userScore === 5 || computerScore === 5) {
        alert('The game has finished!');
    } else if (userChoice === computerChoice) {
        alert('It\'s a tie!');
    } else if (userChoice === 'rock' && computerChoice === 'scissors' ||
    userChoice === 'paper' && computerChoice === 'rock' ||
    userChoice === 'scissors' && computerChoice === 'paper') {
        alert('You won this round!')
        return userScore++;
    } else {
        alert('The machine takes this one.')
        return computerScore++;
    }

}

function winner() {
    if (!alreadyCalledWinner) {
        if (userScore > computerScore) {
            alert('You won it all!')
            alreadyCalledWinner = true;
            return `You win!\nYour score is: ${userScore}\nThe machine score is: ${computerScore}`;
        } else {
            alert('You lose! lol')
            alreadyCalledWinner = true;
            return `Loser.\nYour score is: ${userScore}\nThe machine score is: ${computerScore}`;
        }
    } else {
        return 'PRESS RESTART TO PLAY AGAIN'
    }

}

function displayChoice(userChoice, computerChoice) {
    userChoiceDisplay.src = `images/${userChoice}.svg`;
    computerChoiceDisplay.src = `images/${computerChoice}.svg`;
    
    displayContainers.forEach((container) => {
        container.style = 'border: 5px solid #3d3c3b';
    })
}