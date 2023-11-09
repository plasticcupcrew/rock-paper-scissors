
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }

    return computerChoice;
}

let player = 0;
let computer = 0;
const choices = document.querySelector(".choices");
const result = document.querySelector(".result");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

playerScore.textContent = "Player Score: 0";
computerScore.textContent = "Computer Score: 0";

function playOneRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();

    choices.textContent = 
        `You chose ${playerChoice}, the computer chose ${computerChoice}`;

    if (playerChoice === computerChoice) {
        result.textContent = "It is a tie this round! Play again!"
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        result.textContent = "You lose the round! Paper beats rock!";
        computerScore.textContent = `Computer Score: ${++computer}`;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        result.textContent = "You win the round! Rock beats scissors!";
        playerScore.textContent = `Player Score: ${++player}`;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        result.textContent = "You lose the round! Scissors beat paper!";
        computerScore.textContent = `Computer Score: ${++computer}`;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        result.textContent = "You win the round! Paper beats rock!";
        playerScore.textContent = `Player Score: ${++player}`;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        result.textContent = "You lose the round! Rock beats scissors!";
        computerScore.textContent = `Computer Score: ${++computer}`;
    } else {
        result.textContent = "You win the round! Scissors beat paper!";
        playerScore.textContent = `Player Score: ${++player}`;
    }

    if(player === 5) {
        result.textContent = `You won the game ${player} to ${computer}!`;
        playerScore.textContent = "Player Score: 0";
        computerScore.textContent = "Computer Score: 0";
        player = 0;
        computer = 0;
    } else if (computer ===5) {
        result.textContent = `You lose the game ${computer} to ${player}!`;
        playerScore.textContent = "Player Score: 0";
        computerScore.textContent = "Computer Score: 0";
        player = 0;
        computer = 0;
    }
}

let rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => playOneRound("rock", getComputerChoice()));

let paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => playOneRound("paper", getComputerChoice()));

let scissorBtn = document.querySelector('#scissors');
scissorBtn.addEventListener('click', () => playOneRound("scissors", getComputerChoice()));