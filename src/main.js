// DOM Elements
var choiceIcons = document.querySelectorAll('.board__center__icons')
var scores = document.querySelectorAll('.board__side__wins-text')
var tagline = document.querySelector('.board__center_text')
var choiceTokens = document.querySelectorAll('.board__center-user-token')

// Global Variables
var user = new Player('User', '👩🏻')
var computer = new Player('Computer', '💻')
var game = new Game(user, computer)
var userSelection
var result

// Event listeners
for (var i = 0; i < choiceIcons.length; i++) {
  choiceIcons[i].addEventListener('click', selectChoice)
}

// Event Handlers
function selectChoice(event) {
  userSelection = event.target.dataset.iconType
  result = game.playRound(userSelection)

  updateWins()
  showUserSelection()
  finishRound()
  setTimeout(resetBoard, 2200)
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
    if (choiceTokens[i].dataset.tokenType === userSelection) {
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

function showResult() {
  tagline.innerText = result
}

function resetResult() {
  tagline.innerText = 'Choose your fighter!'
}

function finishRound() {
  setTimeout(hideUserSelection, 500)
  setTimeout(hideNonSelectedIcon, 500)
  setTimeout(showResult, 500)
}

function resetBoard() {
  for (var i = 0; i < choiceIcons.length; i++) {
    show(choiceIcons[i])
  }
  resetResult()
}
