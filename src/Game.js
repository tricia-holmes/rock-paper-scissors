class Game {
  constructor(user, computer) {
    this.user = user
    this.computer = computer
    this.result
  }

  playRound(userSelection) {
    var computerSelection = this.#getComputerChoice()

    if (userSelection === computerSelection) {
      console.log(`💔 It's a draw! 💔`)
      game.result = `💔 It's a draw! 💔`
    } else if (
      (userSelection === 'paper' && computerSelection === 'scissors') ||
      (userSelection === 'scissors' && computerSelection === 'rock') ||
      (userSelection === 'rock' && computerSelection === 'paper')
    ) {
      this.computer.addWin(this)
    } else {
      this.user.addWin(this)
    }
  }

  #getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors']

    for (var i = 0; i < choices.length; i++) {
      return choices[Math.floor(Math.random() * choices.length)]
    }
  }
}
