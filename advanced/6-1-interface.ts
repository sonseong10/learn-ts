type PosType = {
  x: number
  y: number
}

interface PosInterface {
  x: number
  y: number
}

// object
const obj1: PosType = {
  x: 1,
  y: 2,
}

const obj2: PosInterface = {
  x: 3,
  y: 4,
  z: 5,
}

// class
class Pos1 implements PosType {
  x: number
  y: number
}

class Pos2 implements PosInterface {
  x: number
  y: number
  z: number
}

// Extends
interface ZPositionInterface extends PosInterface {
  z: number
}

type ZPositionType = PosType & { z: number }

// ✨ Only interfaces can be merged.
interface PosInterface {
  z: number
}

// type PosType {
// z: number
// } error

// ✨ Type aliases can use computed properties
type Cat = {
  name: string
  age: number
}
type HomeCat = Cat["name"]

type Calculator = "add" | "sub"
