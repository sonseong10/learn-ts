{
  // // js
  // function jsAdd(num1, num2) {
  //   return num1 + num2
  // }

  // // ts
  // function tsAdd(num1: number, num2: number): number {
  //   return num1 + num2
  // }

  // //js
  // function jsFetcUser(id) {
  //   //someting
  //   return new Promise((resolve, reject) => {
  //     resolve(100)
  //   })
  // }

  // //ts
  // function tsFetcUser(id: string): Promise<number> {
  //   //someting
  //   return new Promise((resolve, reject) => {
  //     resolve(100)
  //   })
  // }

  // js OK, ts OK
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName)
    console.log(lastName)
  }
  printName("Lisa", "soleve")
  printName("Tom")
  printName("Can", undefined)

  // Default parameter
  function printMsg(msg: string = "Hello") {
    console.log(msg)
  }
  printMsg()

  // Rest parmeter
  function sumAll(...nums: number[]): number {
    return nums.reduce((prveNum, nevtNum) => prveNum + nevtNum)
  }
  console.log(sumAll(1, 2, 3, 4, 5))
}
