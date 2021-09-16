let playerSelection = "Rock"
let computerSelection = ["Rock", "Paper", "Scissors"];
let result = document.getElementById("resultEl")
let playerChoice = document.getElementById("playerChoiceEl")
let computerChoice = document.getElementById("computerChoiceEl")

function playerPlay(clicked_id) {
    if (clicked_id === "playerRockBtn") {
        playerSelection = "Rock"
    } else if (clicked_id === "playerPaperBtn") {
        playerSelection = "Paper"
    } else {
        playerSelection = "Scissors"
    }
    computerPlay()
    playRound(playerSelection, computerSelection)
}

function computerPlay() {
    let randomSelection = Math.floor(Math.random() * computerSelection.length)
    return computerSelection[randomSelection]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
     if (playerSelection === "rock" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        result.textContent = `Result: You Lose! ${computerSelection} beats ${playerSelection}`
        playerChoice.textContent = `Player's Choice: ${playerSelection}`
        computerChoice.textContent = `Computer's Choice: ${computerSelection}`
    } else if (playerSelection === "rock" && computerSelection === "scissors" || 
               playerSelection === "paper" && computerSelection === "rock" ||
               playerSelection === "scissors" && computerSelection === "paper") {
        result.textContent = `Result: You Win! ${playerSelection} beats ${computerSelection}`
        playerChoice.textContent = `Player's Choice: ${playerSelection}`
        computerChoice.textContent = `Computer's Choice: ${computerSelection}`
    } else {
        result.textContent = "Result: Draw"
        playerChoice.textContent = `Player's Choice: ${playerSelection}`
        computerChoice.textContent = `Computer's Choice: ${computerSelection}`
    }
}


