// Global Variables
var iconMap = {
  user: '👩🏻',
  computer: '💻',
  rock: '🪨',
  scissors: '✂️',
  paper: '📄',
  lizard: '🦎',
  alien: '👾'
}
var user = new Player('User', iconMap.user)
var computer = new Player('Computer', iconMap.computer)
var game = new Game(user, computer)

// DOM Elements
var homePage = document.querySelector('[data-page-type="home"]')
var gameBoard = document.querySelector('[data-page-type="game"]')
var classicBtn = document.querySelector('.home__classic-btn')
var difficultBtn = document.querySelector('.home__difficult-btn')
var changeBtn = document.querySelector('.board__change-btn')
var choiceIcons = document.querySelectorAll('.board__icon-wrapper')
var scores = document.querySelectorAll('.board__wins')
var boardTitle = document.querySelector('.board__title')
var subtitle = document.querySelector('.board__subtitle')
var choiceTokens = document.querySelectorAll('.board__user-selection-icon')
var iconContainer = document.querySelector('.board__icon-container')
var lizard = document.querySelector('[data-icon-type="lizard"]')
var alien = document.querySelector('[data-icon-type="alien"]')

// Event listeners
window.addEventListener('load', createListenersForChoiceIcons)
classicBtn.addEventListener('click', playClassicMode)
difficultBtn.addEventListener('click', playDifficultMode)
changeBtn.addEventListener('click', goToHome)

// Event Handlers
function createListenersForChoiceIcons() {
  for (var i = 0; i < choiceIcons.length; i++) {
    choiceIcons[i].addEventListener('click', playGame)
  }
}

function playClassicMode() {
  game.type = 'classic'
  boardTitle.innerText = 'Classic Battle'
  showIconChoices()
  hide(homePage)
  show(gameBoard)
}

function playDifficultMode() {
  game.type = 'difficult'
  boardTitle.innerText = 'Difficult Battle'
  showIconChoices()
  hide(homePage)
  show(gameBoard)
}

function playGame(event) {
  var userSelection = event.currentTarget.dataset.iconType
  var drawIcon

  game.playRound(userSelection)

  if (game.result === `💔 It's a draw! 💔`) {
    drawIcon = createDrawIcon(userSelection)
  }

  displayGameRound(drawIcon, userSelection)
  setTimeout(function () {
    resetBoard(drawIcon)
  }, 2200)
}

function goToHome() {
  show(homePage)
  hide(gameBoard)
  hide(lizard)
  hide(alien)
}

// Helper functions
function createDrawIcon(userSelection) {
  var newDrawSection = document.createElement('div')
  var newDrawIcon = document.createElement('span')
  newDrawIcon.innerHTML = iconMap[userSelection]

  newDrawSection.classList.add('board__icon-wrapper')
  newDrawSection.dataset.iconType = userSelection
  newDrawSection.appendChild(newDrawIcon)
  return newDrawSection
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
      choiceIcons[i].dataset.iconType !== computer.currentChoice
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
  subtitle.innerText = game.result
}

function resetBoard(drawIcon) {
  if (drawIcon) {
    drawIcon.remove()
  }

  showIconChoices()
  hideUserSelection()
  resetResultText()
}

function showIconChoices() {
  if (game.type === 'classic') {
    for (var i = 0; i < 3; i++) {
      show(choiceIcons[i])
    }
  } else if (game.type === 'difficult') {
    for (var i = 0; i < choiceIcons.length; i++) {
      show(choiceIcons[i])
    }
  }
}

function hideUserSelection() {
  for (var i = 0; i < choiceTokens.length; i++) {
    hide(choiceTokens[i])
  }
}

function resetResultText() {
  subtitle.innerText = 'Choose your fighter!'
}
