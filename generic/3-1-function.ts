{
  function checkOnlyNumber(arg: number | null): number {
    if (arg == null) {
      throw new Error(`not valid number: ${arg}`)
    }
    return arg
  }
  const result = checkOnlyNumber(123)

  function checkOnlyAny(arg: any | null): any {
    if (arg == null) {
      throw new Error(`not valid number: ${arg}`)
    }
    return arg
  }
  const result1 = checkOnlyAny(123)

  function checkNotNull<G>(arg: G | null): G {
    if (arg == null) {
      throw new Error(`not valid number: ${arg}`)
    }
    return arg
  }
  const number: number = checkNotNull(123)
  const boal: boolean = checkNotNull(false)

  console.log(result)
}
