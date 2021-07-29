{
  const obj = {
    name: "nabi",
  }

  obj.name // nabi
  obj["name"] // nabi

  type Animal = {
    name: string
    age: number
    gender: "M" | "F"
  }

  type Name = Animal["name"]
  const name: Name = "Homi"

  type Gender = Animal["gender"]
  const gender: Gender = "M"

  type Keys = keyof Animal // 'name' | 'age' | 'gender'
  const key: Keys = "age"

  type Bug = {
    name: Animal["name"]
    leg: number
  }
  const spider: Bug = {
    name: "alex",
    leg: 8,
  }
}
