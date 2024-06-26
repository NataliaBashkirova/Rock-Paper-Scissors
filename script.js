let humanScore = 0,
    computerScore = 0;

function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case (0) : 
        return "Rock";
        case(1) :
        return "Paper";
        case (2) :
        return "Scissors";
    }
    
}

console.log(getComputerChoice());
console.log("I'm ready to play Rock-Paper-Scissors.");

