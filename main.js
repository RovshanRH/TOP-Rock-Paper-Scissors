function getComputerChoice(e) {
    if (0 <= e && e < 0.25) return "rock";
    else if (0.25 <= e && e < 0.75) return "paper";
    else if (0.75 <= e && e <= 1) return "scissors"
}

function getHumanChoice() {
    choice = prompt("Choose: rock, paper or scissors").toLowerCase();
    
    while(["rock", "paper", "scissors"].includes(choice) == false) {
        choice = prompt("Please, choose from this: rock, paper or scissors").toLowerCase();
    }

    return choice;
}

humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {
    playRoundArray = [humanChoice, computerChoice];
    if ((playRoundArray[0] == "rock" && playRoundArray[1] == "paper") || (playRoundArray[0] == "paper" && playRoundArray[1] == "rock") || (playRoundArray[0] == "scissors" && playRoundArray[1] == "paper")) {
        console.log(`You won! ${playRoundArray[0]} beats ${playRoundArray[1]}.`);
        humanScore++;
    }
    else if (playRoundArray[0] == playRoundArray[1]) console.log(`Draw!`);
    else {
        console.log(`You lose! ${playRoundArray[1]} beats ${playRoundArray[0]}.`);
        computerScore++;
    }
}

function playGame() {
    for (i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(Math.random());

        console.log(humanSelection);
        console.log(computerSelection);

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) console.log("You won! The game is over");
    else if (humanScore < computerScore) console.log("You lose! The game is over");
    else console.log("Draw! The game is over");

}

playGame();




