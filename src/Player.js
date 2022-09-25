class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
    this.currentFighter
  }

  takeTurn(selection) {
    this.currentFighter = selection
  }

  addWin() {
    this.wins++
    return `${this.token} ${this.name} won this round! ${this.token}`
  }
}
