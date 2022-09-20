// DOM Elements
var choiceIcons = document.querySelectorAll('.board__center__icons')

// Global Variables
var user = new Player('user', '👩🏻')
var computer = new Player('computer', '💻')

// Event listeners
for (var i = 0; i < choiceIcons.length; i++) {
  choiceIcons[i].addEventListener('click', selectChoice)
}

// Event Handlers
function selectChoice(event) {
  // we want to use the event.target info to find out what their chocie is
  var userSelection = event.target.dataset.iconType
  console.log('USER', userSelection)

  // computer makes a choice by random selection

  var computerSelection = getComputerChoice()
  console.log('COMPUTER', computerSelection)
  // we compare user vs computer choices

  // Draws
  if (userSelection === computerSelection) {
    console.log('You have a draw!')
  }

  // Paper & Scissors
  if (userSelection === 'paper' && computerSelection === 'scissors') {
    computer.wins++
    console.log('Computer wins!')
  }

  if (userSelection === 'scissors' && computerSelection === 'paper') {
    user.wins++
    console.log('User wins!')
  }

  // Rock & Scissors
  if (userSelection === 'scissors' && computerSelection === 'rock') {
    computer.wins++
    console.log('Computer wins!')
  }

  if (userSelection === 'rock' && computerSelection === 'scissors') {
    user.wins++
    console.log('User wins!')
  }

  // Paper & Rock
  if (userSelection === 'rock' && computerSelection === 'paper') {
    computer.wins++
    console.log('Computer wins!')
  }

  if (userSelection === 'paper' && computerSelection === 'rock') {
    user.wins++
    console.log('User wins!')
  }

  // we have a result
  // we add win to winner score
  // we reset the board
}

function getComputerChoice() {
  var choices = ['rock', 'paper', 'scissors']

  for (var i = 0; i < choices.length; i++) {
    return choices[Math.floor(Math.random() * choices.length)]
  }
}
