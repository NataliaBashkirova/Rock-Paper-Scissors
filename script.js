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

function playRound(e) {
  const computerChoice = getComputerChoice();
  const humanChoice = e.target.id;
  const resultsCtr = document.querySelector("#resultsCtr");
  if (computerChoice === humanChoice) {
    resultsCtr.textContent += `\nIt's a draw! Computer chose ${computerChoice} too.`;
  } else if (
    (computerChoice === "Rock" && humanChoice === "Paper") ||
    (computerChoice === "Paper" && humanChoice === "Scissors") ||
    (computerChoice === "Scissors" && humanChoice === "Rock")
  ) {
    resultsCtr.textContent += `\nYou won! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } else {
    resultsCtr.textContent += `\nYou lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  }

  resultsCtr.textContent += `\n Human: ${humanScore} Computer: ${computerScore}`;

  if (computerScore >= 5 || humanScore >= 5) {
    resultsCtr.textContent += `\n\n ${computerScore >=5 ? 'COMPUTER' : 'HUMAN'} is a winner!`;
    document.querySelectorAll("button").forEach(x => x.disabled = true);
  }
}

function InitializeUI() {
  let controlsCtr = document.createElement("div");
  controlsCtr.id = "controlsCtr";

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

  let resultsCtr = document.createElement('div');
  resultsCtr.id = "resultsCtr";
  resultsCtr.textContent = "Computer says:";
  resultsCtr.style.border = "black 1px solid";
  resultsCtr.style.whiteSpace = "pre-line";
  

  let domBody = document.querySelector("body");
  domBody.appendChild(controlsCtr);
  controlsCtr.appendChild(rockButton);
  controlsCtr.appendChild(paperButton);
  controlsCtr.appendChild(scissorsButton);
  domBody.appendChild(resultsCtr);

}

InitializeUI();
let humanScore = 0;
let computerScore = 0;