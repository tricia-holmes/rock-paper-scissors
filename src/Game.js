class Game {
  constructor(user, computer) {
    this.user = user
    this.computer = computer
    this.classicFighters = ['mercury', 'mars', 'moon']
    this.difficultFighters = ['mercury', 'mars', 'moon', 'venus', 'jupiter']
    this.winMap = {
      mercury: ['mars', 'jupiter'],
      mars: ['moon', 'venus'],
      moon: ['mercury', 'venus '],
      venus: ['mercury', 'jupiter'],
      jupiter: ['mars', 'moon'],
    }
    this.type
    this.result
  }

  playRound(userSelection) {
    this.computer.takeTurn(this.#getRandomChoice())
    this.user.takeTurn(userSelection)
    console.log('COMPUTER', this.computer.currentFighter)
    console.log('USER', this.user.currentFighter)

    if (this.user.currentFighter === this.computer.currentFighter) {
      this.result = `💔 It's a draw! 💔`
    } else if (
      this.winMap[this.user.currentFighter].includes(this.computer.currentFighter)
    ) {
      this.result = this.user.addWin()
    } else {
      this.result = this.computer.addWin()
    }

    console.log(this.result)
  }

  #getRandomChoice() {
    if (this.type === 'classic')
      for (var i = 0; i < this.classicFighters.length; i++) {
        return this.classicFighters[
          Math.floor(Math.random() * this.classicFighters.length)
        ]
      }
    else {
      for (var i = 0; i < this.difficultFighters.length; i++) {
        return this.difficultFighters[
          Math.floor(Math.random() * this.difficultFighters.length)
        ]
      }
    }
  }
}
