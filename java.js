
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
    let userInput = prompt("Rock, Paper, Scissors!").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        alert("Please enter a valid response");
        return getHumanChoice();
    }
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//**determine the winner- display win, lose or draw
//**establish rules, example: rock beats scissors, paper beats rock, scissors beats paper, same input is a draw



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        function chooseWinner() {
            if (humanChoice === computerChoice) {
                return "It's a Draw!";
            }

            if (
                (humanChoice === "scissors" && computerChoice === "rock") ||
                (humanChoice === "rock" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "scissors")
            ) {
                computerScore += 1;
                return `You lose! ${computerChoice} beats ${humanChoice}!`;
            } else {
                humanScore += 1;
                return `You win! ${humanChoice} beats ${computerChoice}!`;
            }

        }
        console.log(chooseWinner());
        console.log(`You chose: ${humanChoice}`);
        console.log(`Opponent chose: ${computerChoice}`);
        console.log(`Your score: ${humanScore}`);
        console.log(`Opponent score: ${computerScore}`);

    }
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log("Game over!");
    console.log(
        humanScore > computerScore
        ? "You win!"
        : humanScore < computerScore
        ? "You lose."
        : "It's a tie"
    );
}

playGame();