
function getComputerChoice (){
    let computerChoice = "";
    const computerInt = Math.floor(Math.random()*3);
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

function playRound (player , computer) {
    let roundWinner = "";
    const winMap = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };
    if (player === computer) {
        roundWinner = "It's a tie";
    } else if (winMap[player] === computer) {
        roundWinner = "human";
    } else {
        roundWinner = "computer";
    }
    return roundWinner;
}

function displayResults (player , computer , winner) {
    if (winner == "computer") {
        const resultText = player + " loses to " + computer;
        const result = document.getElementById("result");
        result.textContent = resultText;

    }
    else if(winner == "human") {
        const resultText = player + " beats " + computer;
        const result = document.getElementById("result");
        result.textContent = resultText;
    }
    else {
        const resultText = player + " ties with " + computer;
        const result = document.getElementById("result");
        result.textContent = resultText;
    }
}


let round = 1;
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".rps-button");
buttons.forEach(button => {
    button.addEventListener("click", (event)=>{
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        const roundWinner = playRound (playerChoice, computerChoice);
        displayResults (playerChoice , computerChoice , roundWinner);
        if (roundWinner == "human") {
            playerScore++;
        } else if (roundWinner == "computer") {
            computerScore++;
        }
        const score = "Player: " + playerScore + " | Computer: " + computerScore;
        const scoreboard =  document.getElementById("scoreboard");
        scoreboard.textContent = score;
        round++
        const displayRound = document.getElementById("round")
        displayRound.textContent = "Round: " + round;
        if (round > 5) {
            buttons.forEach(button => {
                button.disabled = true;
            })
            if (playerScore > computerScore) {
                const winner = document.getElementById("winner");
                winner.textContent = "You won!"
            } else if (playerScore < computerScore) {
                const winner = document.getElementById("winner");
                winner.textContent = "You lost!"
            } else {
                const winner = document.getElementById("winner");
                winner.textContent = "It's a tie!"
            }
            const playAgain = document.createElement("button");
            playAgain.textContent = "Play Again?";
            playAgain.addEventListener("click", (event)=>{
                let round = 1;
                let playerScore = 0;
                let computerScore = 0;
                displayRound.textContent = "Round: " + round;
                scoreboard.textContent = "Player: " + playerScore + " | Computer: " + computerScore;
                winner.textContent = "";
                playAgain.remove();
            })
            document.body.appendChild(playAgain);
        }

    })
})