
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function playOneRound(playerChoice, computerChoice) {

    let result;
    playerChoice = playerChoice.toLowerCase();

    console.log(`You chose ${playerChoice}`);
    console.log(`The computer chooses ${computerChoice}`);

    if (playerChoice === computerChoice) {
        result = "It is a tie! Play again!"
        console.log(result);
        return result;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        result = "You lose! Paper beats rock!";
        console.log(result);
        return result;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        result = "You win! Rock beats scissors!";
        console.log(result);
        return result;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        result = "You lose! Scissors beat paper!";
        console.log(result);
        return result;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        result = "You win! Paper beats rock!";
        console.log(result);
        return result;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        result = "You lose! Rock beats scissors!";
        console.log(result);
        return result;
    } else {
        result = "You win! Scissors beat paper!";
        console.log(result);
        return result;
    }
}

playOneRound("scissors", getComputerChoice());
playOneRound("rock", getComputerChoice());
playOneRound("paper", getComputerChoice());
playOneRound("paper", getComputerChoice());