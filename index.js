let computerSelection = null

function computerPlay() {
    computerSelection = Math.floor(Math.random() * 3) // Math.floor() returns an integer, Math.random() returns a random floating point
    switch(computerSelection) {
        case 0:
            computerSelection = "Rock";
            document.getElementById("computer-choice").innerHTML = computerSelection;
            document.getElementById("result-field").innerHTML = "Computer Win";
            break;
        case 1:
            computerSelection = "Paper";
            document.getElementById("computer-choice").innerHTML = computerSelection;
            document.getElementById("result-field").innerHTML = "Computer Lose";
            break;
        case 2:
            computerSelection = "Scissor";
            document.getElementById("computer-choice").innerHTML = computerSelection;
            document.getElementById("result-field").innerHTML = "Computer Win";
            break;
    }
}


