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

// console.log(getComputerChoice());
// const compChoice = getComputerChoice();
// console.log(typeof(compChoice));

// Step 3: Write the logic to get the human choice
function getHumanChoice() {
    const userInput = prompt("rock, paper, scissors!");
    // console.log(userInput);
    // console.log(typeof(userInput));
    return userInput;
}

// getHumanChoice();

// // Step 4: Declare the players score variables
// let humanScore = 0;
// let computerScore = 0;

// // Step 5: Write the logic to play a single round
// function playRound(humanChoice, computerChoice) {
//     if ((computerChoice === "rock" && humanChoice === "scissors") ||
//         (computerChoice === "scissors" && humanChoice === "paper") ||
//         (computerChoice === "paper" && humanChoice === "rock")) {
//         console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//         ++computerScore;
//         console.log("computerScore = " + computerScore);
//     } else if((computerChoice === "scissors" && humanChoice === "rock") ||
//         (computerChoice === "paper" && humanChoice === "scissors") ||
//         (computerChoice === "rock" && humanChoice === "paper")) {
//         console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//         ++humanScore;
//         console.log("humanScore = " + humanScore);
//     } else {
//         console.log("Draw!");
//     }
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection.toLowerCase(), computerSelection.toLowerCase());

// Step 6: Write the logic to play the entire game
function playGame() {
    // Step 4: Declare the players score variables
    let humanScore = 0;
    let computerScore = 0;

    // Step 5: Write the logic to play a single round
    function playRound(humanChoice, computerChoice) {
        if ((computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "scissors" && humanChoice === "paper") ||
            (computerChoice === "paper" && humanChoice === "rock")) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            ++computerScore;
            // console.log("computerScore = " + computerScore);
        } else if((computerChoice === "scissors" && humanChoice === "rock") ||
            (computerChoice === "paper" && humanChoice === "scissors") ||
            (computerChoice === "rock" && humanChoice === "paper")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            ++humanScore;
            // console.log("humanScore = " + humanScore);
        } else {
            console.log("Draw!");
        }
    }

    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1));
        playRound(getHumanChoice().toLowerCase(), getComputerChoice().toLowerCase());
    }

    if (humanScore > computerScore) {
        console.log("You won this game!");
    } else if (humanScore < computerScore) {
        console.log("You lost this game!");
    } else {
        console.log("Draw game!");
    }

    console.log("Computer score = " + computerScore);
    console.log("Human score = " + humanScore);
}

playGame();