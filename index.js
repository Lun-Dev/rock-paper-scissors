// Global Variable //
let playerScore = 0
let computerScore = 0
let playerSelection = ""
let computerSelection = ["Rock", "Paper", "Scissors"];
const result = document.querySelector("#resultEl")
const playerChoice = document.querySelector("#playerChoiceEl")
const computerChoice = document.querySelector("#computerChoiceEl")
const playerScores = document.querySelector("#playerScoreEl")
const computerScores = document.querySelector("#computerScoreEl")

// Function //
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

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

