let playerScore = 0;
let computerScore = 0;

const resultBox = document.querySelector(".result-box");
const gameResult = document.createElement("div");
gameResult.textContent = `${playerScore} - ${computerScore}`;
resultBox.appendChild(gameResult);
gameResult.classList.add("game-result");

const resultText = document.createElement("p");
resultText.textContent = "";
resultText.classList.add("result-text");

const winnerDeclaration = document.createElement("p");
winnerDeclaration.textContent = "";
winnerDeclaration.classList.add("winner-declaration");

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
	resultText.textContent = playRound(playerSelection, computerSelection);
	gameResult.textContent = `${playerScore} - ${computerScore}`;
	resultBox.appendChild(resultText);
	console.log(playerScore);
	console.log(computerScore);
	endGame();
})

paperButton.addEventListener("click", (event) => {
	event.preventDefault
	const playerSelection = paperButton.innerText;
	const computerSelection = getComputerChoice();
	resultText.textContent = playRound(playerSelection, computerSelection);
	gameResult.textContent = `${playerScore} - ${computerScore}`;
	resultBox.appendChild(resultText);
	console.log(playerScore);
	console.log(computerScore);
	endGame();
})

scissorsButton.addEventListener("click", (event) => {
	event.preventDefault
	const playerSelection = scissorsButton.innerText;
	const computerSelection = getComputerChoice();
	resultText.textContent = playRound(playerSelection, computerSelection);
	gameResult.textContent = `${playerScore} - ${computerScore}`;
	resultBox.appendChild(resultText);
	console.log(playerScore);
	console.log(computerScore);
	endGame();
})

function endGame() {
	if (playerScore === 5 || computerScore === 5)  {
		rockButton.disabled = true;
		paperButton.disabled = true;
		scissorsButton.disabled = true;
		if (playerScore >= 5) {
			winnerDeclaration.textContent = "You won the game!";
			resultBox.appendChild(winnerDeclaration);
		} else if (computerScore >= 5) {
			winnerDeclaration.textContent = "You lost the game!";
			resultBox.appendChild(winnerDeclaration);
		}
		const resetGameButton = document.createElement('button');
		resetGameButton.textContent = "Reset Game";
		resetGameButton.addEventListener("click", () => {
			window.location.reload();
		})
		document.body.appendChild(resetGameButton);
		console.log(resetGameButton);
	}
}


