function getComputerChoice() {
	const choices = ['Rock', 'Paper', 'Scissors'];
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	
	if (playerSelection === computerSelection.toLowerCase()) {
		return "It's a tie!";
	} else if (playerSelection === 'rock' && computerSelection === 'Scissors' || 
			   playerSelection === 'paper' && computerSelection === 'Rock' || 
			   playerSelection === 'scissors' && computerSelection === 'Paper') {
		return `You win! ${playerSelection} beats ${computerSelection}.`;
	} else {
		return `You lose! ${computerSelection} beats ${playerSelection}.`;
	}
}

function game() {
	let playerScore = 0;
	let computerScore = 0;
	
	for (let i = 1; i <= 5; i++) {
		const playerSelection = prompt(`Round ${i}: Choose Rock, Paper or Scissors`);
		const computerSelection = getComputerChoice();
		const result = playRound(playerSelection, computerSelection);
		console.log(result);
		
		if (result.startsWith('You win')) {
			playerScore++;
		} else if (result.startsWith('You lose')) {
			computerScore++;
		}
	}
	
	if (playerScore > computerScore) {
		console.log(`You won the game! Final score: ${playerScore}-${computerScore}`);
	} else if (playerScore < computerScore) {
		console.log(`You lost the game! Final score: ${playerScore}-${computerScore}`);
	} else {
		console.log(`It's a tie! Final score: ${playerScore}-${computerScore}`);
	}
}

game();
