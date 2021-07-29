const x = {}
let y = {}
console.log(x)
console.log(y)

const array = []
console.log(array)

console.log(x.__proto__ === y.__proto__)
console.log(x.__proto__ === array.__proto__)

function PlayGame(title) {
  this.title = title
  // this.gameChange = (game) => {
  //   console.log("Changing... game 🎮")
  // }
}

// Prototype level
PlayGame.prototype.gameChange = (game) => {
  console.log("Changing... game 🎮")
}

const game1 = new PlayGame("picman")
const game2 = new PlayGame("mario")

console.log(game1)
console.log(game2)

function TwoDGame(graphic) {
  this.graphic = graphic
}

TwoDGame.prototype = Object.create(PlayGame.prototype)

const twoDGame = new TwoDGame("2d")
console.log(twoDGame.gameChange())
