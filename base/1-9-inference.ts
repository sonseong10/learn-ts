/**
 *  Type Inference
 */
let text = "hello"
// text = 1; error

function print(msg = "Hello") {
  console.log(msg)
}

print(text)
// print(1) error

function add(x: number, y: number) {
  return x + y
}

const result = add(1, 2)
