// Global Variables
var iconMap = {
  user: '👩🏻',
  computer: '💻',
  rock: '🪨',
  scissors: '✂️',
  paper: '📄',
}
var user = new Player('User', iconMap.user)
var computer = new Player('Computer', iconMap.computer)
var game = new Game(user, computer)
var userSelection // need this to live in the player class
var result // need this to live in the game class

// DOM Elements
var choiceIcons = document.querySelectorAll('.board__icon-wrapper')
var scores = document.querySelectorAll('.board__wins')
var tagline = document.querySelector('.board__subtitle')
var choiceTokens = document.querySelectorAll('.board__user-selection-icon')
var iconContainer = document.querySelector('.board__icon-container')


// Event listeners
for (var i = 0; i < choiceIcons.length; i++) {
  choiceIcons[i].addEventListener('click', selectChoice)
}

// Event Handlers
function selectChoice(event) {
  userSelection = event.currentTarget.dataset.iconType
  result = game.playRound(userSelection)
  var gameSelectionElem

  if (result === `💔 It's a draw! 💔`) {
    gameSelectionElem = createGameSelection(userSelection)
  }

  showUserSelection()
  setTimeout(updateWins,500)
  setTimeout(function () {
    finishRound(gameSelectionElem)
  }, 700)
  setTimeout(function () {
    resetBoard(gameSelectionElem)
  }, 2200)
}

// Helper functions

function updateWins() {
  for (var i = 0; i < scores.length; i++) {
    if (scores[i].dataset.winType === 'human') {
      scores[i].innerText = `Wins:${user.wins}`
    } else {
      scores[i].innerText = `Wins:${computer.wins}`
    }
  }
}

function show(element) {
  element.classList.remove('hidden')
}

function showUserSelection() {
  for (var i = 0; i < choiceTokens.length; i++) {
    if (
      choiceTokens[i].closest('button[data-icon-type]').dataset.iconType ===
      userSelection
    ) {
      show(choiceTokens[i])
    }
  }
}

function hide(element) {
  element.classList.add('hidden')
}

function hideUserSelection() {
  for (var i = 0; i < choiceTokens.length; i++) {
    hide(choiceTokens[i])
  }
}

function hideNonSelectedIcon() {
  for (var i = 0; i < choiceIcons.length; i++) {
    if (
      choiceIcons[i].dataset.iconType !== userSelection &&
      choiceIcons[i].dataset.iconType !== game.computerChoice
    ) {
      hide(choiceIcons[i])
    }
  }
}

function appendGameSelection(gameSelection) {
  if (gameSelection) {
    iconContainer.appendChild(gameSelection)
  }
}

function showResult() {
  tagline.innerText = result
}

function resetResult() {
  tagline.innerText = 'Choose your fighter!'
}

function finishRound(gameSelection) {
  hideNonSelectedIcon()
  appendGameSelection(gameSelection)
  showResult()
}

function resetBoard(tiedGameIcon) {
  if (tiedGameIcon) {
    tiedGameIcon.remove()
  }

  for (var i = 0; i < choiceIcons.length; i++) {
    show(choiceIcons[i])
  }
  hideUserSelection()
  resetResult()
}

function createGameSelection(id) {
  var newGameSelection = document.createElement('div')
  var newGameSelectionIcon = document.createElement('span')
  newGameSelectionIcon.innerHTML = iconMap[id]
  
  newGameSelection.classList.add('board__icon-wrapper')
  newGameSelection.dataset.iconType = id
  newGameSelection.appendChild(newGameSelectionIcon)
  return newGameSelection
}
