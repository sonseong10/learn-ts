{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }
  class CoffeeMaker {
    static SHOULD_BEANS_PRE_SHOT = 7 // 상수인 경우 타입추론 이용하기
    coffeeBeans: number = 0

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.SHOULD_BEANS_PRE_SHOT) {
        throw new Error(`can't make coffee.`)
      }
      this.coffeeBeans -= shots * CoffeeMaker.SHOULD_BEANS_PRE_SHOT
      return {
        shots,
        hasMilk: false,
      }
    }
  }

  const maker = new CoffeeMaker(100)
  maker.makeCoffee(2)
  console.log(maker)
}
