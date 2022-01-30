// function that randomly return 'rock', 'paper' or 'scissors'
function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    let number = Math.floor(Math.random() * choice.length);
    return choice[number];
}

//  function checks who the winner is and returns a string that declares the winner
function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return 'Tied!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return 'You lose! Paper beats Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return 'You win! Paper beats Rock';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return 'You win! Rock beats Scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return 'You lose! Rock beats Scissors'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return 'You win! Scissors beats Paper';
    } 

    return false;
}
// main game function that keeps score of 5 games
function game() {


    let playerScore = 0;
    let computerScore = 0;
    let finishedGames = 0;

    // game loop for 5 finished games
    while (finishedGames < 5) {
        
        let playerInput = prompt('You\'re playing against a computer.\nPick rock, paper or scissors?').toLowerCase();
        let result = playRound(playerInput, computerPlay());

        // if false game doesn't count as finished
        if (result === false) {
            console.log('Incorrect input. Try again.');
            continue;
        }

        console.log(result);
        finishedGames++;
    }

    // Logs out the games score
    console.log(`Score: Player ${playerScore}, Computer ${computerScore}`);
    
    // Logs out who the winner is
    if (playerScore > computerScore) {
        console.log('Congratulations! You Won!');
    } else if (computerScore > playerScore) {
        console.log('Sorry. You Lost!');
    } else {
        console.log('Game ended in a Tie!');
    }
}

// gets textarea from html 
let text = document.querySelector('textarea');
text.textContent = "> You're playing against a computer. Pick rock, paper or scissors?"; 

// add eventlisteners for buttons
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.innerText.toLowerCase(), computerPlay());
    });
});

// when button pressed start round one