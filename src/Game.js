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
}
