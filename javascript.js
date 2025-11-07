// Step 3: Write the logic to get the human choice
// function getHumanChoice() {
//     const userInput = prompt("rock, paper, scissors!");
//     return userInput;
// }

// Step 6: Write the logic to play the entire game
// function playGame() {
//     // Step 4: Declare the players score variables
//     let humanScore = 0;
//     let computerScore = 0;

//     // Step 5: Write the logic to play a single round
//     function playRound(humanChoice, computerChoice) {
//         if ((computerChoice === "rock" && humanChoice === "scissors") ||
//             (computerChoice === "scissors" && humanChoice === "paper") ||
//             (computerChoice === "paper" && humanChoice === "rock")) {
//             // console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//             ++computerScore;
//         } else if((computerChoice === "scissors" && humanChoice === "rock") ||
//             (computerChoice === "paper" && humanChoice === "scissors") ||
//             (computerChoice === "rock" && humanChoice === "paper")) {
//             // console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//             ++humanScore;
//         } 
//         // else {
//         //     console.log("Draw!");
//         // }
//     }

//     // for (let i = 0; i < 5; i++) {
//     //     console.log("Round " + (i + 1));
//     //     playRound(getHumanChoice().toLowerCase(), getComputerChoice().toLowerCase());
//     // }
//     while (humanScore < 0 || computerScore < 0) {
//         playRound(getHumanChoice().toLowerCase(), getComputerChoice().toLowerCase());
//     }

//     if (humanScore > computerScore) {
//         console.log("You won this game!");
//     } else if (humanScore < computerScore) {
//         console.log("You lost this game!");
//     } else {
//         console.log("Draw game!");
//     }

//     console.log("Computer score = " + computerScore);
//     console.log("Human score = " + humanScore);
// }

// playGame();

// Step 2: Write the logic to get the computer choice

// Will randomly return one of the following string values: “rock”, “paper” or “scissors”
function getComputerChoice() {
  const randInt = Math.floor(Math.random() * 3);

  if (randInt === 0) {
    return "rock";
  } else if (randInt === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

const div = document.createElement("div");

const header = document.createElement("h2");
header.textContent = "Welcome!";
div.appendChild(header);

const header2 = document.createElement("h2");
header2.textContent = "Click rock, paper, or scissors to play!";
div.appendChild(header2);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock")) {
        // console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
    } else if((computerChoice === "scissors" && humanChoice === "rock") ||
        (computerChoice === "paper" && humanChoice === "scissors") ||
        (computerChoice === "rock" && humanChoice === "paper")) {
        // console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
    } 
    // else {
    //     console.log("Draw!");
    // }
}

const playerScore = document.createElement("p");
playerScore.textContent = `Player score: ${humanScore}`;
div.appendChild(playerScore);

const compScore = document.createElement("p");
compScore.textContent = `Computer score: ${computerScore}`;
div.appendChild(compScore);

document.body.appendChild(div);

const rock = document.querySelector(".rockBtn");
const paper = document.querySelector(".paperBtn");
const scissors = document.querySelector(".scissorsBtn");

function choseRock() {
    const compChoice = getComputerChoice();
    header.textContent = "You picked rock!";
    header2.textContent = `The computer picked ${compChoice}!`;
    playRound("rock", compChoice);
    playerScore.textContent = `Player score: ${humanScore}`;
    compScore.textContent = `Computer score: ${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
        rock.removeEventListener("click", choseRock);
        paper.removeEventListener("click", chosePaper);
        scissors.removeEventListener("click", choseScissors);
        header.textContent = "Game Over!"
        header2.textContent = humanScore > computerScore ? "You win!" : "You lose!";
    }
}

function chosePaper() {
    const compChoice = getComputerChoice();
    header.textContent = "You picked paper!";
    header2.textContent = `The computer picked ${compChoice}!`;
    playRound("paper", compChoice);
    playerScore.textContent = `Player score: ${humanScore}`;
    compScore.textContent = `Computer score: ${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
        rock.removeEventListener("click", choseRock);
        paper.removeEventListener("click", chosePaper);
        scissors.removeEventListener("click", choseScissors);
        header.textContent = "Game Over!"
        header2.textContent = humanScore > computerScore ? "You win!" : "You lose!";
    }
}

function choseScissors() {
    const compChoice = getComputerChoice();
    header.textContent = "You picked scissors!";
    header2.textContent = `The computer picked ${compChoice}!`;
    playRound("scissors", compChoice);
    playerScore.textContent = `Player score: ${humanScore}`;
    compScore.textContent = `Computer score: ${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
        rock.removeEventListener("click", choseRock);
        paper.removeEventListener("click", chosePaper);
        scissors.removeEventListener("click", choseScissors);
        header.textContent = "Game Over!"
        header2.textContent = humanScore > computerScore ? "You win!" : "You lose!";
    }
}

rock.addEventListener("click", choseRock);
paper.addEventListener("click", chosePaper);
scissors.addEventListener("click", choseScissors);
