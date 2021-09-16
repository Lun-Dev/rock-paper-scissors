function computerPlay() {
    let randomSelection = Math.floor(Math.random() * computerSelection.length)
    return computerSelection = computerSelection[randomSelection]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
     if (playerSelection === "rock" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === "rock" && computerSelection === "scissors" || 
               playerSelection === "paper" && computerSelection === "rock" ||
               playerSelection === "scissors" && computerSelection === "paper") {
        return `You Lose! ${playerSelection} beats ${computerSelection}`
    } else {
        return "Draw"
    }
}

let playerSelection = "Rock"
let computerSelection = ["Rock", "Paper", "Scissors"];

console.log(playerSelection)
console.log(computerPlay())
console.log(playRound(playerSelection, computerSelection))

