// globel => browser => window
console.log(this)

function thisFunction() {
  console.log(this)
}
thisFunction() // window.thisFunction()

//
class SumCount {
  count = 0
  add = () => console.log(this)
}

const sum = new SumCount()
sum.add()

const call = sum.add()
// const call = sum.add.bind(sum)
console.log(call)

//
const temp1 = "somthing!"
let temp2 = "somthing!!"
var temp3 = "somthing!!!"

// 🤔
// window.temp1
// window.temp2
// window.temp3

class Foo {}
const foo = new Foo()
foo.run = sum.add
foo.run()
