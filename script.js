function getComputerChoice() {
  let rocks = 0,
    papers = 0,
    scissors = 0;
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

function makeStringProper(input) {
  if (input.length > 0) {
    return input.slice(0, 1).toUpperCase() + input.slice(1);
  } else {
    throw new Error("String is empty or too short.");
  }
}

function playRound(e) {
  const computerChoice = getComputerChoice();
  const humanChoice = e.target.id;
  if (computerChoice === humanChoice) {
    console.log(`It's a draw! Computer chose ${computerChoice} too.`);
    return "draw";
  } else if (
    (computerChoice === "Rock" && humanChoice === "Paper") ||
    (computerChoice === "Paper" && humanChoice === "Scissors") ||
    (computerChoice === "Scissors" && humanChoice === "Rock")
  ) {
    console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
    return "human";
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    return "computer";
  }
}

function playGame() {
  InitializeUI();

  let humanScore = 0,
    computerScore = 0;
  for (i = 0; i < 5; i++) {
    console.log(`Beggining round ${i + 1}...`);

    result = playRound();
    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }

    console.log(`Score\nHuman: ${humanScore}    Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("You won!");
  } else if (computerScore > humanScore) {
    console.log("Computer won!");
  } else {
    console.log("A draw!");
  }
}

function InitializeUI() {
  let rockButton = document.createElement("button");
  rockButton.id = "Rock";
  rockButton.textContent = "ROCK";
  rockButton.addEventListener("click", playRound);

  let paperButton = document.createElement("button");
  paperButton.id = "Paper";
  paperButton.textContent = "PAPER";
  paperButton.addEventListener("click", playRound);

  let scissorsButton = document.createElement("button");
  scissorsButton.id = "Scissors";
  scissorsButton.textContent = "SCISSORS";
  scissorsButton.addEventListener("click", playRound);



  let domBody = document.querySelector("body");
  domBody.appendChild(rockButton);
  domBody.appendChild(paperButton);
  domBody.appendChild(scissorsButton);

}

playGame();
