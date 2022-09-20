// DOM Elements
var choiceIcons = document.querySelectorAll('.board__center__icons')

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
  game.playRound(userSelection)
  
}
