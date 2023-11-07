
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

function playOneRound(playerChoice, computerChoice) {

    let result;
    playerChoice = playerChoice.toLowerCase();

    console.log(`You chose ${playerChoice}, the computer chose ${computerChoice}`);

    if (playerChoice === computerChoice) {
        result = "It is a tie this round! Play again!"
        console.log(result);
        return result;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        result = "You lose the round! Paper beats rock!";
        console.log(result);
        return result;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        result = "You win the round! Rock beats scissors!";
        console.log(result);
        return result;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        result = "You lose the round! Scissors beat paper!";
        console.log(result);
        return result;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        result = "You win the round! Paper beats rock!";
        console.log(result);
        return result;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        result = "You lose the round! Rock beats scissors!";
        console.log(result);
        return result;
    } else {
        result = "You win the round! Scissors beat paper!";
        console.log(result);
        return result;
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let result = playOneRound(prompt("Rock, Paper, or Scissors?", "Paper"), getComputerChoice());
        if (result.includes("win")) {
            playerScore++
        } else if (result.includes("lose")) {
            computerScore++
        } else {
            i--;
        }
    }

    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

    if (playerScore > computerScore) {
        console.log("Wou won the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It was a tie this game! Play another game to win!");
    }

}

game();