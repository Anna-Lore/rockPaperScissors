// This is a project for rock, paper, scissors game
// using JavaScript.

// console.log(Math.random());

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
   if (answer != "rock" && answer != "paper" && answer != "scissors"){
        console.log("This is not a value answer. Please try again.");
   }
   return answer;
}

let score;
let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
       
    if (humanChoice == "rock"){
        if (computerChoice == "scissors"){
            console.log("You win! Rock beats scissors.");
            return("H");
            
        }
        else if (computerChoice == "paper"){
            console.log("Oof, you're lost! Paper beats rock.");
            return("C");
            
        }
        else if (computerChoice == "rock"){
            console.log("It's a tie. Both are rock.");
            return("T");
        }
    }

    if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            console.log("You win! Paper beats rock.");
            return("H");
            
        }
        else if (computerChoice == "scissors"){
            console.log("Oof, you're lost! Scissors beat paper.");
            return("C");
            
        }

        else if (computerChoice == "paper"){
            console.log("It's a tie. Both are paper.");
            return("T");
        }
    }

    if (humanChoice == "scissors"){
        if (computerChoice == "paper"){
            console.log("You win! Scissors beat paper.");
            return("H");
            
        }

        else if (computerChoice == "rock"){
            console.log("Oof, you're lost! Rock beats scissors.");
            return("C");
            
        }

        else if (computerChoice == "scissors"){
            console.log("It's a tie. Both are scissors.");
            return("T");
        }
    }
        
}


//loop until one player has 5 points
while(humanScore < 5 && computerScore < 5){
    score = playRound(getHumanChoice(), getComputerChoice());
    if(score == "H"){
        humanScore += 1;
    } else if(score == "C"){
        computerScore += 1;
    } else if(score == "T"){
        console.log("It's tie.")
    }

    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);
   

}
