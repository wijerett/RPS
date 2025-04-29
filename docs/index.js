

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


const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

const container = document.querySelector("#container");
container.setAttribute("style", "height: 300px; width: 400px; background: green; margin: 20px; padding: 20px; text-align: center;");


const oppChoice = document.querySelector("#oppChoice");
const youChoice = document.querySelector("#youChoice");
const result = document.querySelector("#result");
const oppScore = document.querySelector("#oppScore");
const youScore = document.querySelector("#youScore");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {

    const computerChoice = getComputerChoice();
    let result;

    if (humanChoice === computerChoice) {
        result = "It's a Draw!";
    } else if (
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors")
    ) {
        computerScore += 1;
        result = `You lose! ${computerChoice} beats ${humanChoice}!`;
    } else {
        humanScore += 1;
        result = `You win! ${humanChoice} beats ${computerChoice}!`;
    }
    if (humanScore === 5) {
        result = "Game over, You win!";
        disableButtons();
    } else if (computerScore === 5) {
        result = "Game over, You lose!";
        disableButtons();
    }

    container.innerHTML =`
        <p>Opponent chose: ${computerChoice}</p>
        <P>You chose: ${humanChoice}</p>
        <p>${result}</p>
        <p>Opponent score: ${computerScore}</p>
        <p>Your score: ${humanScore}</p>
        `;
}

function disableButtons() {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
}



btnRock.addEventListener("click", () => playRound("rock"));
btnPaper.addEventListener("click", () => playRound("paper"));
btnScissors.addEventListener("click", () => playRound("scissors"));
