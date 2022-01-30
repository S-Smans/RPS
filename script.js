// function that randomly return 'rock', 'paper' or 'scissors'
function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    let number = Math.floor(Math.random() * choice.length);
    return choice[number];
}

// function checks who the winner is and returns a string that declares the winner
function playRound(playerSelection, computerSelection) {

    let computerScore = document.getElementById('computer-score');
    let playerScore = document.getElementById('player-score');


    if (playerSelection == computerSelection) {
        return '> Tied!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore.textContent++;
        return '> You lose! Paper beats Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore.textContent++;
        return '> You win! Paper beats Rock';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore.textContent++;
        return '> You win! Rock beats Scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore.textContent++;
        return '> You lose! Rock beats Scissors'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore.textContent++;
        return '> You lose! Scissors beats Paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore.textContent++;
        return '> You win! Scissors beats Paper';
    } 

    return false;
}

// main game function that keeps score of 5 games
function game(button) {
    if (finishedGames >= 5) {
        restartGame();
    }

    finishedGames++;

    // gets the result of the round
    let result = playRound(button.innerText.toLowerCase(), computerPlay());
    text.textContent += `\n${result}`;

    if (finishedGames >= 5) {
        gameEnd();
    }
}

function gameEnd() {
    let computerScore = document.getElementById('computer-score').innerText;
    let playerScore = document.getElementById('player-score').innerText;

    // Logs out who the winner is
    if (playerScore > computerScore) {
        text.textContent += '\n\n> Congratulations! You Won!';
    } else if (computerScore > playerScore) {
        text.textContent += '\n\n> Sorry. You Lost!';
    } else {
        text.textContent += '\n\n> Game ended in a Tie!';
    }

    // Logs out the games score
    text.textContent += `\n> Score: Player ${playerScore}, Computer ${computerScore}`;
}

function restartGame() {
    text.textContent = '> Starting a new round of Rock, Paper and Scissors';
    document.getElementById('computer-score').innerText = 0;
    document.getElementById('player-score').innerText = 0;
    finishedGames = 0;
}

// gets textarea from html 
let text = document.querySelector('textarea');
text.textContent = "> You're playing against a computer. Pick rock, paper or scissors?"; 

// add eventlisteners for buttons
let buttons = document.querySelectorAll('button');

let finishedGames = 0;

// when button pressed start round 
buttons.forEach(button => {
    button.addEventListener('click', () => {
        game(button);
    });
});