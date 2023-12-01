// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

// Function to randomly get the computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
