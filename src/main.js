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

// Event listeners
for (var i = 0; i < choiceIcons.length; i++) {
  choiceIcons[i].addEventListener('click', selectChoice)
}

// Event Handlers
function selectChoice(event) {
  userSelection = event.target.dataset.iconType
  console.log(userSelection)

  var result = game.playRound(userSelection)
  tagline.innerText = result

  updateWins()
  showUserSelection()
  // setTimeout(hideUserSelection, 1500)
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

function showUserSelection() {
  for (var i = 0; i < choiceTokens.length; i++) {
    if (choiceTokens[i].dataset.tokenType === userSelection) {
      show(choiceTokens[i])
      console.log('HERE')
    }
  }
}

function hideUserSelection() {
  for (var i = 0; i < choiceTokens.length; i++) {
    hide(choiceTokens[i])
  }
}

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}
