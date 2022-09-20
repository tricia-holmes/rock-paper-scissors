// DOM Elements
var choiceIcons = document.querySelectorAll('.board__center__icons')
var scores = document.querySelectorAll('.board__side__wins-text')
var tagline = document.querySelector('.board__center_text')

// Global Variables
var user = new Player('User', '👩🏻')
var computer = new Player('Computer', '💻')
var game = new Game(user, computer)

// Event listeners
for (var i = 0; i < choiceIcons.length; i++) {
  choiceIcons[i].addEventListener('click', selectChoice)
}

// Event Handlers
function selectChoice(event) {
  var userSelection = event.target.dataset.iconType

  var result = game.playRound(userSelection)
  tagline.innerText = result

  updateWins()
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
