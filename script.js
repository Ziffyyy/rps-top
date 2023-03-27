//Make an array to get the computer choice
const possibleValues = ['rock', 'paper', 'scissors'];
//Make the computerChoice, userChoice, userScore and computerScore variables
let userChoice;
let userScore = 0;
let computerChoice;
let computerScore = 0;

//Make the function that gets the computer choice
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * possibleValues.length);
    let computerChoice = possibleValues[randomIndex];
    return computerChoice;
}
//Make the function that gets the player choice
function getUserChoice() {
    userChoice = prompt('Rock, Paper or Scissors?').toLowerCase();
    if (userChoice === 'rock' || 
    userChoice === 'paper' || 
    userChoice === 'scissors') {
        return userChoice;
    } else {
        alert('That\'s not a valid choice');
        getUserChoice();
        return;
    }
}
//Make the function that takes the previous returns and compares them to get a winner
function playRound(userChoice, computerChoice) {
    userChoice = getUserChoice();
    computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        alert('It\'s a tie!');
        return `Your score is: ${userScore}\n The machine score is: ${computerScore}.`;
    } else if (userChoice === 'rock' && computerChoice === 'scissors' ||
    userChoice === 'paper' && computerChoice === 'rock' ||
    userChoice === 'scissors' && computerChoice === 'paper') {
        alert('You won this round!')
        return `Your score is: ${++userScore}\n The machine score is: ${computerScore}.`;
    } else {
        alert('The machine takes this one.')
        return `Your score is: ${userScore}\n The machine score is: ${++computerScore}.`;
    }
}
//Make a function that repeats the last one five times and returns a winner
function game() {
    for (let i = 0; i<5; i++) {
        playRound(userChoice,computerChoice);
    }
    console.log(winner())
function winner() {
    if (userScore === computerScore) {
        alert('Nobody wins!')
        return 'Tie game.'
    } else if (userScore > computerScore) {
        alert('You won it all!')
        return 'You win.'
    } else {
        alert('You lose! lol')
        return 'Loser.'
    }
}
}

