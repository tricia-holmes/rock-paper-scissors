class Game {
  constructor(user, computer) {
    this.user = user
    this.computer = computer
  }

  playRound(userSelection) {
    var computerSelection = this.#getComputerChoice()

    if (userSelection === computerSelection) {
      console.log(`💔 It's a draw! 💔`)
    } else if (
      (userSelection === 'paper' && computerSelection === 'scissors') ||
      (userSelection === 'scissors' && computerSelection === 'rock') ||
      (userSelection === 'rock' && computerSelection === 'paper')
    ) {
      this.computer.addWin()
    } else {
      this.user.addWin()
    }
  }

  #getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors']

    for (var i = 0; i < choices.length; i++) {
      return choices[Math.floor(Math.random() * choices.length)]
    }
  }
}
