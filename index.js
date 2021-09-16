/* Global Variable */


// let playerSelection = ""
// let computerScore = 0
// let playerScore = 0

/* Player's Choice */

// function rockChoice() {
//     playerSelection = "Rock"
//     result()
// }

// function paperChoice() {
//     playerSelection = "Paper"
//     result()
// }

// function scissorsChoice() {
//     playerSelection = "Scissors"
//     result()
// }

/* Computer's Choice */



/* Result's Logic */


/* Your game is going to play against the computer, 
so begin with a function called 
computerSelection that will randomly return either 
‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in 
the game to make the computer’s play. Tip: use the console 
to make sure this is returning the expected output before 
moving to the next step! */

/* Global Variable */

let playerSelection = ""
let computerSelection = ["Rock", "Paper", "Scissors"]
let playerChoiceMsg = "Player's Choice: "
let computerChoiceMsg = "Computer's Choice: "
let playerChoice = document.getElementById("playerChoiceEl")
let computerChoice = document.getElementById("computerChoiceEl")

/* Computer's Choice */

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * computerSelection.length)
    computerSelection = computerSelection[randomChoice]
    return computerSelection
}

/* Player's Choice */

function rockChoice() {
    playerSelection = "Rock"
    render()
}

function paperChoice() {
    playerSelection = "Paper"
    render()
}

function scissorsChoice() {
    playerSelection = "Scissors"
    render()
}

/* Play Logic */
function render() {
    computerPlay()
    playRound(playerSelection, computerSelection)
    playerChoice.textContent = playerChoiceMsg + playerSelection
    computerChoice.textContent = computerChoiceMsg + computerSelection
}

/* Main Logic */

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "Rock" && playerSelection === "Paper") {
        console.log("Player Win")
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        console.log("Player Lose")
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        console.log("Player Win")
    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        console.log("Player Lose")
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        console.log("Player Win")
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        console.log("Player Lose")
    } else if (computerSelection === "Rock" && playerSelection === "Rock") {
        console.log("Draw!")
    } else if (computerSelection === "Paper" && playerSelection === "Paper") {
        console.log("Draw!")
    } else if (computerSelection === "Scissors" && playerSelection === "Scissors") {
        console.log("Draw!")
    }
}