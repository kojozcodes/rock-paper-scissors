function game() {
    let computerWinCount = 0;
    let playerWinCount = 0;

    function getComputerChoice() {
        let computerChoice;
        let randomNumber = Math.floor((Math.random() * 3) + 1)
        if (randomNumber === 1) {
            computerChoice = 'rock'
            return computerChoice;

        } else if (randomNumber === 2) {
            computerChoice = 'paper'
            return computerChoice

        } else if (randomNumber === 3) {
            computerChoice = 'scissors'
            return computerChoice
        }
    }

    function playRockPaperScissors(computerSelection, playerSelection) {
        
        if (computerSelection === playerSelection) {
            return `It is a draw - ${computerSelection} and ${playerSelection} is the same`;

        } else if (computerSelection === 'rock' && playerSelection === 'paper') {
            playerWinCount++
            return `You Win! ${computerSelection} beats ${playerSelection}`

        } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
            playerWinCount++
            return `You Win! ${computerSelection} beats ${playerSelection}`

        } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
            playerWinCount++
            return `You Win! ${computerSelection} beats ${playerSelection}`

        } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
            computerWinCount++
            return `You Lose! ${computerSelection} beats ${playerSelection}`

        } else if (computerSelection === 'paper' && playerSelection === 'rock') {
            computerWinCount++
            return `You Lose! ${computerSelection} beats ${playerSelection}`

        } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
            computerWinCount++
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
    }

    const computerChoices = getComputerChoice();
    const playerChoices = prompt('Pick your choice: rock, paper or scissors').toLowerCase();

    console.log(`Computer Choice: ${computerChoices}`);
    console.log(`Your Choice: ${playerChoices}`);
    console.log(playRockPaperScissors(computerChoices, playerChoices));

    console.log (`Player Score: ${playerWinCount}`);
    console.log (`Computer Score: ${computerWinCount}`);
    console.log('*********************************************************************************')
}

game()
game()
game()
game()
game()

