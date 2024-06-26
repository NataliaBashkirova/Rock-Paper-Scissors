let humanScore = 0,
  computerScore = 0;
let computerChoice, 
  humanChoice;

function getComputerChoice() {
  let rocks = 0,
    papers = 0,
    scissors = 0;
  for (i = 0; i < 100000; i++) {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        rocks++;
        return "Rock";
      case 1:
        papers++;
        return "Paper";
      case 2:
        scissors++;
        return "Scissors";
      default:
        throw new Error("Computer choice out of boundaries.");
    }
  }
}

function getHumanChoice() {
  return makeStringProper(prompt("What will you pick? (rock/paper/scissors)")
    .trim()
    .toLowerCase());
}

function makeStringProper(input) {
    if (input.length > 0) {
        return input.slice(0, 1).toUpperCase() + input.slice(1);
    }
    else {
        throw new Error("String is empty or too short.");
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return `It's a draw! Computer chose ${computerChoice} too.`;
    }
    else if ( (computerChoice === "rock" && humanChoice === "paper")
           || (computerChoice === "paper" && humanChoice === "scissors")
           || (computerChoice === "scissors" && humanChoice === "rock") ) {
            return `You won! ${humanChoice} beats ${computerChoice}.`;
        }
    else {
        return `You lose! ${computerChoice} beats ${humanChoice}.`
    }
    
}

computerChoice = getComputerChoice();
humanChoice = getHumanChoice();

console.log(playRound(computerChoice, humanChoice));
console.log("I'm ready to play Rock-Paper-Scissors.");
