function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor((Math.random() * 3) + 1)
    if (randomNumber === 1) {
        computerChoice = 'rock'
        console.log(computerChoice);
    } else if (randomNumber === 2) {
        computerChoice = 'paper'
        console.log(computerChoice);
    } else if (randomNumber === 3) {
        computerChoice = 'scissors'
        console.log(computerChoice);
    }
}


const computerChoice = getComputerChoice();
const playerChoice = prompt('Pick your choice: rock, paper or scissors');

console.log(playerChoice)
