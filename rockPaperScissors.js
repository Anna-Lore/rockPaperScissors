// This is a project for rock, paper, scissors game
// using JavaScript.

console.log(Math.random());

function getComputerChoice() {
    let choice = Math.random()
    
    if (choice <= (1 / 3)){
        console.log("rock");
        return "rock";
    } else if (choice <= (2 / 3)){
        console.log("paper");
        return "paper";
    } else if (choice <= (3 / 3)){
        console.log("scissors");
        return "scissors";
    }
}
    
function getHumanChoice() {
   let answer = prompt("Pick between rock, paper, or scissors:").toLowerCase();
   console.log(answer);
   return answer;
}

let score = 0;

function playRound(humanChoice, computerChoice) {
       
    if (humanChoice == "rock"){
        if (computerChoice == "scissors"){
            console.log("You win! Rock beats scissors.");
        }
        else if (computerChoice == "paper"){
            console.log("Oof, you're lost! Paper beats rock.");
        }
        else if (computerChoice == "rock"){
            console.log("It's a tie. Both are rock.");
        }
    }

    if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            console.log("You win! Paper beats rock.");
        }
        else if (computerChoice == "scissors"){
            console.log("Oof, you're lost! Scissors beat paper.");
        }

        else if (computerChoice == "paper"){
            console.log("It's a tie. Both are paper.");
        }
    }

    if (humanChoice == "scissors"){
        if (computerChoice == "paper"){
            console.log("You win! Scissors beat paper.");
        }

        else if (computerChoice == "rock"){
            console.log("Oof, you're lost! Rock beats scissors.");
        }

        else if (computerChoice == "scissors"){
            console.log("It's a tie. Both are scissors.");
        }
    }
        
}

playRound(getHumanChoice(), getComputerChoice());