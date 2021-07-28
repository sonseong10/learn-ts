{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }
  class CoffeeMaker {
    private static SHOULD_BEANS_PRE_SHOT = 7 // 상수인 경우 타입추론 이용하기
    private coffeeBeans: number = 0

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error(`value for beans be greater then 0: ${beans}`)
      }
      this.coffeeBeans += beans
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

  const maker = CoffeeMaker.makeMachine(100)
  maker.fillCoffeeBeans(32)
  console.log(maker)
}
