{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }
  const SHOULD_BEANS_PRE_SHOT = 7 // 상수인 경우 타입추론 이용하기
  let coffeeBeans: number = 0
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * SHOULD_BEANS_PRE_SHOT) {
      throw new Error(`can't make coffee.`)
    }
    coffeeBeans -= shots * SHOULD_BEANS_PRE_SHOT
    return {
      shots,
      hasMilk: false,
    }
  }

  coffeeBeans += 3 * SHOULD_BEANS_PRE_SHOT
  const coffee = makeCoffee(2)
  console.log(coffee)
}
