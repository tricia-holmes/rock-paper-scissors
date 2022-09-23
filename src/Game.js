class Game {
  constructor(user, computer) {
    this.user = user
    this.computer = computer
    this.result
    this.type
  }

  playRound(userSelection) {
    this.computer.takeTurn(this.#getRandomChoice())
    this.user.takeTurn(userSelection)

    if (this.user.currentChoice === this.computer.currentChoice) {
      this.result = `💔 It's a draw! 💔`
    } else if (
      (this.user.currentChoice === 'paper' &&
        this.computer.currentChoice === 'scissors') ||
      (this.user.currentChoice === 'scissors' &&
        this.computer.currentChoice === 'rock') ||
      (this.user.currentChoice === 'rock' &&
        this.computer.currentChoice === 'paper')
    ) {
      this.result = this.computer.addWin()
    } else {
      this.result = this.user.addWin()
    }
  }

  #getRandomChoice() {
    var choices = ['rock', 'paper', 'scissors']

    for (var i = 0; i < choices.length; i++) {
      return choices[Math.floor(Math.random() * choices.length)]
    }
  }
}
