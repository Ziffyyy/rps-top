//Make an array to get the computer choice
const possibleValues = ['rock', 'paper', 'scissors'];
//Make the computerChoice, userChoice, userScore and computerScore variables
let userChoice;
let userScore;
let computerChoice;
let computerScore;

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

//Make a function that repeats the last one five times and returns a winner


