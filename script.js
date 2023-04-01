//Make an array to get the computer choice
const possibleValues = ['rock', 'paper', 'scissors'];

//Make the computerChoice, userChoice, userScore and computerScore variables
let userChoice;
let userScore = 0;
let computerChoice;
let computerScore = 0;

//Select all the playing buttons and assign them to the buttons variable, and take
//the reset button and assign it to its variable
const buttons = document.querySelectorAll('.choiceButton');
const container = document.querySelector('#container');

//Add an event listener to the reset button that resets all scores


//Add an event listener to each button, and depending of the id of the button
//pressed, return the playRound function with the corresponding value
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.id;
        computerChoice = getComputerChoice();
        playRound(userChoice,computerChoice);
        updateScoreText();
        if(userScore === 5 || computerScore === 5) {
            alert(winner(userScore, computerScore));
            const resetButton = document.createElement('button');
            resetButton.textContent = "RESET";
            resetButton.addEventListener('click', () => {
                userScore = 0;
                computerScore = 0;
                resultContainer.textContent = `Click a button to start!`;
                container.removeChild(resetButton);
            })
            container.appendChild(resetButton);
        }
    })
})

//Select the div that's gonna contain the results and assign it to the
//resultContainer variable
const resultContainer = document.querySelector('#results')

//Make the text inside the results div change depending on the current score
function updateScoreText() {
    resultContainer.textContent = `Your score is: ${userScore}\n The machine score is: ${computerScore}.`;
}

//Make the function that gets the computer choice
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * possibleValues.length);
    let computerChoice = possibleValues[randomIndex];
    return computerChoice;
}

//Make the function that takes the previous returns and compares them to get a winner
function playRound(userChoice, computerChoice) {
    if (userScore === 5 || computerScore === 5) {
        alert(winner(userScore, computerScore));
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
    if (userScore > computerScore) {
        alert('You won it all!')
        return `You win!\nYour score is: ${userScore}\nThe machine score is: ${computerScore}`;
    } else {
        alert('You lose! lol')
        return `Loser.\nYour score is: ${userScore}\nThe machine score is: ${computerScore}`;
    }
}

