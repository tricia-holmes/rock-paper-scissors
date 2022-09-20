class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
  }

  addWin(game) {
    this.wins++ 
    console.log(`${this.token} ${this.name} won this round! ${this.token}`)
    game.result = (`${this.token} ${this.name} won this round! ${this.token}`)
  }
}
