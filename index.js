let playerSelection = "Rock"
let computerSelection = ["Rock", "Paper", "Scissors"];
let result = document.querySelector("#resultEl")
let playerChoice = document.querySelector("#playerChoiceEl")
let computerChoice = document.querySelector("#computerChoiceEl")
let playerScore = 0
let computerScore = 0
let playerScores = document.querySelector("#playerScoreEl")
let computerScores = document.querySelector("#computerScoreEl")

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

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection;
    computerSelection = computerPlay();
     if (playerSelection === "Rock" && computerSelection === "Paper" || 
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "scissors" && computerSelection === "Rock") {
        result.textContent = `Result: You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
        playerChoice.textContent = `Player's Choice: ${capitalize(playerSelection)}`
        computerChoice.textContent = `Computer's Choice: ${capitalize(computerSelection)}`
        computerScore++
        computerScores.textContent = `Copmuter's Score: ${computerScore}`
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || 
               playerSelection === "Paper" && computerSelection === "Rock" ||
               playerSelection === "Scissors" && computerSelection === "Paper") {
        result.textContent = `Result: You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
        playerChoice.textContent = `Player's Choice: ${capitalize(playerSelection)}`
        computerChoice.textContent = `Computer's Choice: ${capitalize(computerSelection)}`
        playerScore++
        playerScores.textContent = `Player's Score: ${playerScore}`
    } else {
        result.textContent = "Result: Draw"
        playerChoice.textContent = `Player's Choice: ${capitalize(playerSelection)}`
        computerChoice.textContent = `Computer's Choice: ${capitalize(computerSelection)}`
    }
}

