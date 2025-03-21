//**run the program
//**randomize computer input to put up against user input

function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


//**accept input from user
//**input is either rock, paper or scissors


function getHumanChoice() {
    userInput = prompt("Rock, Paper, Scissors!").toLowerCase();
    if (userInput == "rock") {
        return ("rock");
    }
    else if (userInput == "paper") {
        return ("paper");
    }
    if (userInput == "scissors") {
        return ("scissors");
    } else return ("Please enter a valid response");
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();





//**determine the winner- display win, lose or draw
//**establish rules eg. rock beats scissors, paper beats rock, scissors beats paper, same input is a draw

function playGame() {
    var humanScore = 0;
    var computerScore = 0;


        function playRound(humanChoice, computerChoice) {
            humanChoice = humanSelection;
            computerChoice = computerSelection;


            if (humanChoice === computerChoice) 
                console.log("It's a Draw!");
	
            if (humanChoice == "scissors" && computerChoice == "rock") {
                console.log("You lose! rock beats scissors!")
                ++computerScore;
            }
            if (humanChoice == "rock" && computerChoice == "paper") {
                console.log("You lose! paper beats rock")
                ++computerScore;
            }
            if (humanChoice == "paper" && computerChoice == "scissors") {
                console.log("You lose! scissors beats paper")
                ++computerScore;
            }
            if (humanChoice == "scissors" && computerChoice == "paper") {
                console.log("You win! scissors beats paper")
                ++humanScore;
            }
            if (humanChoice == "rock" && computerChoice == "scissors") {
                console.log("You win! rock beats scissors")
                ++humanScore;
            }
            if (humanChoice == "paper" && computerChoice == "rock") {
                console.log("You win! paper beats rock")
                ++humanScore;
            }



    }
    console.log("Opponent score: " + computerScore);
    console.log("Your score: " + humanScore);
    playRound();
}


console.log("Opponent chose: " + computerSelection);
console.log("You chose: " + humanSelection);
playGame();
