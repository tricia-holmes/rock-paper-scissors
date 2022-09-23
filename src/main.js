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
var result // need this to live in the game class

// DOM Elements
var choiceIcons = document.querySelectorAll('.board__icon-wrapper')
var scores = document.querySelectorAll('.board__wins')
var subtitle = document.querySelector('.board__subtitle')
var choiceTokens = document.querySelectorAll('.board__user-selection-icon')
var iconContainer = document.querySelector('.board__icon-container')

// Event listeners
window.addEventListener('load', createListenersForChoiceIcons)

// Event Handlers
function playGame(event) {
  var userSelection = event.currentTarget.dataset.iconType
  result = game.playRound(userSelection)
  var drawIcon

  if (result === `💔 It's a draw! 💔`) {
    drawIcon = createDrawIcon(userSelection)
  }

  displayGameRound(drawIcon, userSelection)
  setTimeout(function () {
    resetBoard(drawIcon)
  }, 2200)
}

function createDrawIcon(userSelection) {
  var newDrawSection = document.createElement('div')
  var newDrawIcon = document.createElement('span')
  newDrawIcon.innerHTML = iconMap[userSelection]

  newDrawSection.classList.add('board__icon-wrapper')
  newDrawSection.dataset.iconType = userSelection
  newDrawSection.appendChild(newDrawIcon)
  return newDrawSection
}

// Helper functions
function createListenersForChoiceIcons() {
  for (var i = 0; i < choiceIcons.length; i++) {
    choiceIcons[i].addEventListener('click', playGame)
  }
}

function show(element) {
  element.classList.remove('hidden')
}

function hide(element) {
  element.classList.add('hidden')
}

function displayGameRound(drawIcon, userSelection) {
  showUserSelection(userSelection)
  setTimeout(function () {
    finishRound(drawIcon, userSelection)
  }, 700)
}

function showUserSelection(userSelection) {
  for (var i = 0; i < choiceTokens.length; i++) {
    if (
      choiceTokens[i].closest('button[data-icon-type]').dataset.iconType ===
      userSelection
    ) {
      show(choiceTokens[i])
    }
  }
}

function finishRound(drawIcon, userSelection) {
  updateWins()
  hideNonSelectedIcon(userSelection)
  appendDrawIconSection(drawIcon)
  showResultText()
}

function updateWins() {
  for (var i = 0; i < scores.length; i++) {
    if (scores[i].dataset.winType === 'human') {
      scores[i].innerText = `Wins:${user.wins}`
    } else {
      scores[i].innerText = `Wins:${computer.wins}`
    }
  }
}

function hideNonSelectedIcon(userSelection) {
  for (var i = 0; i < choiceIcons.length; i++) {
    if (
      choiceIcons[i].dataset.iconType !== userSelection &&
      choiceIcons[i].dataset.iconType !== game.computerChoice
    ) {
      hide(choiceIcons[i])
    }
  }
}

function appendDrawIconSection(drawIcon) {
  if (drawIcon) {
    iconContainer.appendChild(drawIcon)
  }
}

function showResultText() {
  subtitle.innerText = result
}

function resetBoard(drawIcon) {
  if (drawIcon) {
    drawIcon.remove()
  }

  for (var i = 0; i < choiceIcons.length; i++) {
    show(choiceIcons[i])
  }
  hideUserSelection()
  resetResultText()
}

function hideUserSelection() {
  for (var i = 0; i < choiceTokens.length; i++) {
    hide(choiceTokens[i])
  }
}

function resetResultText() {
  subtitle.innerText = 'Choose your fighter!'
}
