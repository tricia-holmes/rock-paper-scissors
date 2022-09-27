// Global Variables
var user = new Player('User', '🌙')
var computer = new Player('Computer', '👾')
var game = new Game(user, computer)

var sailorMap = {
  moon: {
    spriteImg: 'assets/images/moon-sprites-test.png',
    idle: `Character_spritesheet pixelart scout-anim-idle`,
    attack:
      'Character_spritesheet pixelart attack-frame-mode  scout-anim-attack',
    defeat: 'Character_spritesheet pixelart hold-last-frame scout-anim-defeat',
    victory: 'Character_spritesheet pixelart play-once-mode scout-anim-victory',
  },
  mercury: {
    spriteImg: 'assets/images/mercury-sprites-test.png',
    idle: `Character_spritesheet pixelart scout-anim-idle`,
    attack:
      'Character_spritesheet pixelart attack-frame-mode  scout-anim-attack',
    defeat: 'Character_spritesheet pixelart hold-last-frame scout-anim-defeat',
    victory: 'Character_spritesheet pixelart play-once-mode scout-anim-victory',
  },
  mars: {
    spriteImg: 'assets/images/mars-sprites-test.png',
    idle: `Character_spritesheet pixelart scout-anim-idle`,
    attack:
      'Character_spritesheet pixelart attack-frame-mode  scout-anim-attack',
    defeat: 'Character_spritesheet pixelart hold-last-frame scout-anim-defeat',
    victory: 'Character_spritesheet pixelart play-once-mode scout-anim-victory',
  },
  jupiter: {
    spriteImg: 'assets/images/jupiter-sprites.png',
    idle: `Character_spritesheet pixelart scout-anim-idle`,
    attack:
      'Character_spritesheet pixelart attack-frame-mode  scout-anim-attack',
    defeat: 'Character_spritesheet pixelart hold-last-frame scout-anim-defeat',
    victory: 'Character_spritesheet pixelart play-once-mode scout-anim-victory',
  },
  venus: {
    spriteImg: 'assets/images/venus-sprites-test.png',
    idle: `Character_spritesheet pixelart scout-anim-idle`,
    attack:
      'Character_spritesheet pixelart attack-frame-mode  scout-anim-attack',
    defeat: 'Character_spritesheet pixelart hold-last-frame scout-anim-defeat',
    victory: 'Character_spritesheet pixelart play-once-mode scout-anim-victory',
  },
}

// DOM Elements
var homePage = document.querySelector('[data-page-type="home"]')
var gameBoard = document.querySelector('[data-page-type="game"]')
var boardVideo = document.querySelector('[data-video-type="game"]')
var classicBtn = document.querySelector('.home__classic-btn')
var difficultBtn = document.querySelector('.home__difficult-btn')
var changeBtn = document.querySelector('.board__change-btn')
var boardContainer = document.querySelector('.board__icon-container')
var scores = document.querySelectorAll('.board__wins')
var boardTitle = document.querySelector('.board__title')
var subtitle = document.querySelector('.board__subtitle')
var iconContainer = document.querySelector('.board__icon-container')

// Event listeners
// window.addEventListener('click', playSong)
classicBtn.addEventListener('click', function () {
  chooseGame('classic', 'Classic Battle', 'assets/videos/starry-sky-purple.mp4')
})
difficultBtn.addEventListener('click', function () {
  chooseGame(
    'difficult',
    'Difficult Battle',
    'assets/videos/starry-sky-pastel.mp4'
  )
})
changeBtn.addEventListener('click', goToHome)

function chooseGame(type, title, backgroundVideo) {
  game.type = type
  boardTitle.innerText = title
  boardVideo.src = backgroundVideo
  createFighters()
  hide(homePage)
  show(gameBoard)
}

function playGame(event) {
  var userSelection = event.currentTarget.dataset.iconType
  game.playRound(userSelection)

  displayGameRound()

  if (!game.result.winner) {
    setTimeout(function () {
      resetBoard()
    }, 2500)
    console.log('TIME 2500')
  } else {
    setTimeout(function () {
      resetBoard()
    }, 4200)
    console.log('TIME 4250')
  }
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
  var userFighter = addFighter(user.currentFighter)
  var computerFighter = addFighter(computer.currentFighter, true)

  if (!game.result.winner) {
    return
  }

  if (game.result.winner === 'user') {
    userFighter.className = sailorMap[user.currentFighter].attack
    computerFighter.className = sailorMap[computer.currentFighter].defeat
    console.log(userFighter.className)
    setTimeout(function () {
      setVictory(userFighter)
    }, 1700)
  } else {
    userFighter.className = sailorMap[user.currentFighter].defeat
    computerFighter.className = sailorMap[computer.currentFighter].attack
    setTimeout(function () {
      setVictory(computerFighter)
    }, 1700)
  }
}

function showResultText() {
  subtitle.innerText = game.result.text
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
  spriteImg.src = sailorMap[fighter].spriteImg

  if (reverseCharacter) {
    spriteContainer.classList.add('reverse-character')
  }

  spriteContainer.onclick = playGame
  spriteImg.className = sailorMap[fighter].idle

  spriteContainer.appendChild(spriteImg)
  boardContainer.appendChild(spriteContainer)

  return spriteImg
}

function removeAllFighters() {
  while (boardContainer.firstChild) {
    boardContainer.removeChild(boardContainer.firstChild)
  }
}

function setVictory(winner) {
  winner.className = sailorMap[game.result.winningFighter].victory
}

var song = new Audio('assets/music/Sailor Moon Theme (8 Bit Version).mp3')

// function playSong() {
//   song.volume = 0.5
//   song.play()
// }
