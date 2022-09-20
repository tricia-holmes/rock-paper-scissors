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

  if (userSelection === computerSelection) {
    console.log('You have a draw!')
  } else if (
    (userSelection === 'paper' && computerSelection === 'scissors') ||
    (userSelection === 'scissors' && computerSelection === 'rock') ||
    (userSelection === 'rock' && computerSelection === 'paper')
  ) {
    computer.wins++
    console.log('Computer wins!')
  } else {
    user.wins++
    console.log('User wins!')
  }

  // we reset the board
  console.log(computer)
  console.log(user)
}

function getComputerChoice() {
  var choices = ['rock', 'paper', 'scissors']

  for (var i = 0; i < choices.length; i++) {
    return choices[Math.floor(Math.random() * choices.length)]
  }
}
