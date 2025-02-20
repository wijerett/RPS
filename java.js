//**run the program
//**establish rules eg. rock beats scissors, paper beats rock, scissors beats paper, same input is a draw


//**randomize computer input to put up against user input

function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum < 0.33) {
        return "Rock";
    } else if (randomNum < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
const computerSelection = getComputerChoice();
console.log(computerSelection);

//**accept input from user
//**input is either rock, paper or scissors

function getHumanChoice() {
    const humanChoice= prompt("Rock Paper Scissors!");
    console.log(`${humanChoice}`);
}
const humanSelection = getHumanChoice();

var humanScore = 0;
var computerScore = 0;

//**determine the winner- display win, lose or draw

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log("It's a Draw!");
    }
}
playRound(humanSelection, computerSelection);









