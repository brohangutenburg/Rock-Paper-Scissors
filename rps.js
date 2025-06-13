function getComputerInt(){
    return Math.floor(Math.random()*3);
}


function getHumanChoice (){
    let choice = prompt("Rock, Paper or Scissors? ");
    return choice;
}

function convertComputerInt(computerInt){
    let computerChoice = "";
    if (computerInt === 0){
         computerChoice = "rock";
    }
    else if (computerInt === 1){
         computerChoice = "paper";
    }
    else if (computerInt === 2){
         computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound (human , computer) {
    let winner = "";
    if (human === "rock" && computer === "paper"){
        winner = "computer";
    } else if (human === "paper" && computer === "scissors") {
        winner = "computer";
    } else if (human === "scissors" && computer === "rock") {
        winner = "computer";
    } else if (computer === "rock" && human === "paper") {
        winner = "human";
    } else if (computer === "paper" && human === "scissors") {
        winner = "human";
    } else if (computer === "scissors" && human === "rock") {
        winner = "human";
    }
    else {
        winner = "It's a Tie";
    }
    return winner;
}



let playerTotal = 0;
let computerTotal = 0;

for (let round = 0; round < 5; round++){
    console.log("Round " + (round+1));
    let humanSelection = getHumanChoice().toLowerCase();
    let computerInt = getComputerInt();
    let computerSelection = convertComputerInt(computerInt);
    let roundWinner = playRound(humanSelection, computerSelection);
    console.log(humanSelection);
    console.log(computerSelection);
    console.log(roundWinner);

    if (roundWinner === "computer") {
      computerTotal++;
    } else if (roundWinner === "human") {
      playerTotal++;
    }
    console.log("Human: " + playerTotal);
    console.log("Computer: " + computerTotal);

}