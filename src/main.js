// Global Variables
var user = new Player('User', '🌙')
var computer = new Player('Computer', '👾')
var game = new Game(user, computer)

// DOM Elements
var homePage = document.querySelector('[data-page-type="home"]')
var gameBoard = document.querySelector('[data-page-type="game"]')
var classicBtn = document.querySelector('.home__classic-btn')
var difficultBtn = document.querySelector('.home__difficult-btn')
var changeBtn = document.querySelector('.board__change-btn')
var boardContainer = document.querySelector('.board__icon-container')
var scores = document.querySelectorAll('.board__wins')
var boardTitle = document.querySelector('.board__title')
var subtitle = document.querySelector('.board__subtitle')
var iconContainer = document.querySelector('.board__icon-container')

// Event listeners
classicBtn.addEventListener('click', function () {
  chooseGame('classic', 'Classic Battle')
})
difficultBtn.addEventListener('click', function () {
  chooseGame('difficult', 'Difficult Battle')
})
changeBtn.addEventListener('click', goToHome)

function chooseGame(type, title) {
  game.type = type
  boardTitle.innerText = title
  createFighters()
  hide(homePage)
  show(gameBoard)
}

function playGame(event) {
  var userSelection = event.currentTarget.dataset.iconType

  game.playRound(userSelection)

  displayGameRound()
  setTimeout(function () {
    resetBoard()
  }, 2200)
}

function goToHome() {
  show(homePage)
  hide(gameBoard)
}

// Helper functions
function show(element) {
  element.classList.remove('hidden')
}

function hide(element) {
  element.classList.add('hidden')
}

function displayGameRound() {
  setTimeout(function () {
    finishRound()
  }, 700)
}

function finishRound() {
  updateWins()
  displaySelectedFighter()
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

function displaySelectedFighter() {
  removeAllFighters()
  addFighter(user.currentFighter)
  addFighter(computer.currentFighter, true)
}

function showResultText() {
  subtitle.innerText = game.result
}

function resetBoard() {
  createFighters()
  resetResultText()
}

function createFighters() {
  removeAllFighters()

  if (game.type === 'classic') {
    for (var i = 0; i < game.classicFighters.length; i++) {
      addFighter(game.classicFighters[i])
    }
  } else if (game.type === 'difficult') {
    for (var i = 0; i < game.difficultFighters.length; i++) {
      addFighter(game.difficultFighters[i])
    }
  }
}

function resetResultText() {
  subtitle.innerText = 'Choose your fighter!'
}

function addFighter(fighter, reverseCharacter) {
  var spriteContainer = document.createElement('div')
  var spriteImg = document.createElement('img')

  spriteContainer.dataset.iconType = fighter
  spriteContainer.classList.add('Character')
  spriteImg.src = 'assets/images/mercury-sprites.png'

  if (reverseCharacter) {
    spriteContainer.classList.add('reverse-character')
  }
  spriteContainer.onclick = playGame
  spriteImg.className = 'Character_spritesheet pixelart sm-anim-idle'

  spriteContainer.appendChild(spriteImg)
  boardContainer.appendChild(spriteContainer)
}

function removeAllFighters() {
  while (boardContainer.firstChild) {
    boardContainer.removeChild(boardContainer.firstChild)
  }
}
