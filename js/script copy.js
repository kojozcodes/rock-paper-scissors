const resultBox = document.querySelector(".result-box");

let playerScore = 0;
let computerScore = 0;

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
		playerScore++
		return `You win! ${playerSelection} beats ${computerSelection}.`;
	} else {
		computerScore++
		return `You lose! ${computerSelection} beats ${playerSelection}.`;
	}
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");


rockButton.addEventListener("click", () => {
	const playerSelection = rockButton.innerText;
	const computerSelection = getComputerChoice();
	result = playRound(playerSelection, computerSelection);
	console.log(result);
	console.log(playerScore);
	console.log(computerScore);
})

paperButton.addEventListener("click", () => {
	const playerSelection = paperButton.innerText;
	const computerSelection = getComputerChoice();
	result = playRound(playerSelection, computerSelection);
	console.log(result);
	console.log(playerScore);
	console.log(computerScore);
})

scissorsButton.addEventListener("click", () => {
	const playerSelection = scissorsButton.innerText;
	const computerSelection = getComputerChoice();
	result = playRound(playerSelection, computerSelection);
	console.log(result);
	console.log(playerScore);
	console.log(computerScore);
})

