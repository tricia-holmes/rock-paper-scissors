class Game {
  constructor(user, computer) {
    this.user = user
    this.computer = computer
    this.winMap = {
      rock: ['scissors', 'lizard'],
      paper: ['rock', 'alien'],
      scissors: ['paper', 'lizard'],
      lizard: ['paper', 'alien'],
      alien: ['scissors', 'rock'],
    }
    this.type
    this.result
  }

  playRound(userSelection) {
    this.computer.takeTurn(this.#getRandomChoice())
    this.user.takeTurn(userSelection)
    console.log('COMPUTER', this.computer.currentChoice)
    console.log('USER', this.user.currentChoice)

    if (this.user.currentChoice === this.computer.currentChoice) {
      this.result = `💔 It's a draw! 💔`
    } else if (
      this.winMap[this.user.currentChoice].includes(this.computer.currentChoice)
    ) {
      this.result = this.user.addWin()
    } else {
      this.result = this.computer.addWin()
    }

    console.log(this.result)
  }

  #getRandomChoice() {
    var classicChoices = ['rock', 'paper', 'scissors']
    var difficultChoices = ['rock', 'paper', 'scissors', 'lizard', 'alien']

    if (this.type === 'classic')
      for (var i = 0; i < classicChoices.length; i++) {
        return classicChoices[Math.floor(Math.random() * classicChoices.length)]
      }
    else {
      for (var i = 0; i < difficultChoices.length; i++) {
        return difficultChoices[
          Math.floor(Math.random() * difficultChoices.length)
        ]
      }
    }
  }
}
