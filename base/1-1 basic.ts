{
  const num: number = 6

  const str: string = "Hi"

  const bol: boolean = false

  // undifined && null
  let temp: number | undefined
  temp = undefined
  temp = 123

  let test: string | null
  test = null
  test = "123"

  // unknown
  let foo: unknown = 0
  foo = "Why"
  foo = true

  // any
  let any: any = 0
  any = "zero"
  any = false

  // void
  function show(): void {
    console.log("show")
    return
  }
  const boo: void = undefined

  // never
  function throwError(msg: string): never {
    // msg => server (log)
    throw Error(msg)
    while (true) {}
  }
  let neverEnd: never

  // object
  let obj: object = [1, 2, 3]
  obj = { id: 1 }
}
