{
  // Array
  const strs: string[] = ["A", "B", "C"]
  const numbers: Array<number> = [1, 2, 3]

  // Immutability Array
  function showArray(array: readonly string[]) {}

  // Tuple -> interface, type alias,  class
  let product: [string, number] = ["TV", 13000]
  // 💩
  product[0] // TV
  product[1] // 13000
  // 🤔
  const [name, price] = product
}
