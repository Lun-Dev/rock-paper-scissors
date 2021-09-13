let selection = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let rand = Math.random();
    let totalSelection = selection.length;
    let randSelection = Math.floor(rand * totalSelection);
    let computerSelection = selection[randSelection];
    // computerSelection = Math.floor(Math.random() * 3) // Math.floor() returns an integer, Math.random() returns a random floating point
    switch(computerSelection) {
        case "Rock":
            document.getElementById("computer-choice").innerHTML = computerSelection;
            document.getElementById("result-field").innerHTML = "Computer Win";
            break;
        case "Paper":
            document.getElementById("computer-choice").innerHTML = computerSelection;
            document.getElementById("result-field").innerHTML = "Computer Lose";
            break;
        case "Scissors":
            document.getElementById("computer-choice").innerHTML = computerSelection;
            document.getElementById("result-field").innerHTML = "Computer Win";
            break;
    }
}
