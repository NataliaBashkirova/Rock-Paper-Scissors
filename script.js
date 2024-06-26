let humanScore = 0,
    computerScore = 0;
let computerChoice,
    humanChoice;

function getComputerChoice()
{

    let rocks = 0,
        papers = 0, 
        scissors = 0;
    for (i = 0; i < 100000; i++) {
        let randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case (0) : 
            rocks++;
            return "rock";
            case(1) :
            papers++;
            return "paper";
            case (2) :
            scissors++;
            return "scissors";
            default : 
            throw new Error("Computer choice out of boundaries.")
        }    
    }
}

function getHumanChoice() {

}

computerChoice = getComputerChoice();
humanChoice = prompt("What will you pick? (rock/paper/scissors)").trim().toLowerCase();

console.log (humanChoice);
console.log("I'm ready to play Rock-Paper-Scissors.");

