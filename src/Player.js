class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
  }

  addWin() {
    this.wins++ 
    console.log(`${this.token} ${this.name} won this round! ${this.token}`)
  }
}
