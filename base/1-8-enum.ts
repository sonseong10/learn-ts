{
  /**
   * Enum
   */

  // JS !== Enum
  const PI = 3.14
  const E = 2.71828
  const Math = Object.freeze({ PI: 3.14, E: 2.71828 })
  const showPi = Math.PI

  // TS
  enum Sign {
    PI = 1,
    E,
    Omega,
  }

  let printSing: Sign = Sign.Omega
  console.log(printSing)
  printSing = 10
  console.log(printSing)

  type Signs = 3.14 | 2.71 | 800
  let getSign: Signs = 3.14
  console.log(getSign)
  // getSign = 10 error
}
