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
var subtitle = document.querySelector('.board__subtitle')
var choiceTokens = document.querySelectorAll('.board__user-selection-icon')
var iconContainer = document.querySelector('.board__icon-container')

// Event listeners
window.addEventListener('load', createListenersForChoiceIcons)

// Event Handlers
function playGame(event) {
  userSelection = event.currentTarget.dataset.iconType
  result = game.playRound(userSelection)
  var drawIcon

  if (result === `💔 It's a draw! 💔`) {
    drawIcon = createDrawIcon(userSelection)
  }

  displayGameRound(drawIcon)
  setTimeout(function () {
    resetBoard(drawIcon)
  }, 2200)
}

// Helper functions
function createListenersForChoiceIcons() {
  for (var i = 0; i < choiceIcons.length; i++) {
    choiceIcons[i].addEventListener('click', playGame)
  }
}

function displayGameRound(drawIcon) {
  showUserSelection()
  setTimeout(updateWins, 500)
  setTimeout(function () {
    finishRound(drawIcon)
  }, 700)
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

function appendDrawIconSection(drawIcon) {
  if (drawIcon) {
    iconContainer.appendChild(drawIcon)
  }
}

function showResult() {
  subtitle.innerText = result
}

function resetResult() {
  subtitle.innerText = 'Choose your fighter!'
}

function finishRound(drawIcon) {
  hideNonSelectedIcon()
  appendDrawIconSection(drawIcon)
  showResult()
}

function resetBoard(drawIcon) {
  if (drawIcon) {
    drawIcon.remove()
  }

  for (var i = 0; i < choiceIcons.length; i++) {
    show(choiceIcons[i])
  }
  hideUserSelection()
  resetResult()
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
