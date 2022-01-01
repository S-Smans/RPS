// create a function computerPlay that randomly returns 'rock', 'paper', 'scissors'.
// put the 3 available choices in an array
// call a math.floor function that gets a number from math.random * arrays.length.
// return the randomly picked choice

// create a variable which stores playerInput that is case-insensitive

// create a function that takes two parameters - players selection and computers selection, and returns a string that declares the winner.
// create if else checks to check who the winner is 
// increment the win count by 1 to whoever won the round
// return string "You Win! ......" or "You Lose! ......" 

// create a function called game() that keeps score and reports a winner or loser at the end of 5 games
// create two variables that keep player and computer score
// afer 5 rounds check who the winner is

function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    let number = Math.floor(Math.random() * choice.length);
    return choice[number];
}

function game() {
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

    let playerScore = 0;
    let computerScore = 0;
    let finishedGames = 0;

    while (finishedGames < 5) {
        
        let playerInput = prompt('You\'re playing against a computer.\nPick rock, paper or scissors?').toLowerCase();
        let result = playRound(playerInput, computerPlay());

        if (result === false) {
            console.log('Incorrect input. Try again.');
            continue;
        }

        console.log(result);
        finishedGames++;
    }

    console.log(`Score: Player ${playerScore}, Computer ${computerScore}`);
    
    if (playerScore > computerScore) {
        console.log('Congratulations! You Won!');
    } else if (computerScore > playerScore) {
        console.log('Sorry. You Lost!');
    } else {
        console.log('Game ended in a Tie!');
    }
}

game();