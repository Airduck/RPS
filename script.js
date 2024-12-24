


function getComputerChoice() {
    let a = Math.random();
    if (a <= 0.33) {
        return "rock";
    } else if (a <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Pick RPS");

    choice = choice.toLowerCase();
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {


        if (computerChoice == humanChoice) {
            console.log(("Draw, both players picked " + humanChoice));
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            console.log(("You lose! " + computerChoice + " beats " + humanChoice));
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            console.log(("You win! " + humanChoice + " beats " + computerChoice));
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log(("You win! " + humanChoice + " beats " + computerChoice));
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            console.log(("You lose! " + computerChoice + " beats " + humanChoice));
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            console.log(("You win! " + humanChoice + " beats " + computerChoice));
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            console.log(("You lose! " + computerChoice + " beats " + humanChoice));
        }
    }

    for (i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

playGame();