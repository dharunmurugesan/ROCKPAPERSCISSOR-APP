let playerScore = 0;
let computerScore = 0;

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === computerMove) {
        result = "It's a tie!";
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    document.getElementById("result").innerText = `You picked ${playerMove}, computer picked ${computerMove}. ${result}`;
    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;
}

function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return 'rock';
    } else if (randomNumber < 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
