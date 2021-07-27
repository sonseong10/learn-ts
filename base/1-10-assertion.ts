{
  /**
   * Type Assertions 💩
   */

  function jsPrintStr(): any {
    return 2
  }

  const result = jsPrintStr()
  console.log((result as string).length)
  console.log(<string>result.length)

  const worng: any = 1
  console.log((worng as Array<number>).push(2)) // Type error ☠

  function findNumber(): number[] | undefined {
    return undefined
  }
  const newNum = findNumber()!
  newNum.push() // 😱

  const newNums = findNumber()
  newNums!.push() // 😱
}
