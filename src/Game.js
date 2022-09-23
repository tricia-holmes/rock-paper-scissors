class Game {
  constructor(user, computer) {
    this.user = user
    this.computer = computer
    this.computerChoice
  }

  playRound(userSelection) {
    var computerSelection = this.#getComputerChoice()
    this.computerChoice = computerSelection

    if (userSelection === computerSelection) {
      this.createGameSelection(userSelection, userSelection)
      return `💔 It's a draw! 💔`
    } else if (
      (userSelection === 'paper' && computerSelection === 'scissors') ||
      (userSelection === 'scissors' && computerSelection === 'rock') ||
      (userSelection === 'rock' && computerSelection === 'paper')
    ) {
      return this.computer.addWin()
    } else {
      return this.user.addWin()
    }
  }

  #getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors']

    for (var i = 0; i < choices.length; i++) {
      return choices[Math.floor(Math.random() * choices.length)]
    }
  }

    createGameSelection(id) {
    var newGameSelection = document.createElement('div')
    var newGameSelectionIcon = document.createElement('span')
    newGameSelectionIcon.innerHTML = iconMap[id]
    
    newGameSelection.classList.add('board__icon-wrapper')
    newGameSelection.dataset.iconType = id
    newGameSelection.appendChild(newGameSelectionIcon)
    return newGameSelection
  }
}
