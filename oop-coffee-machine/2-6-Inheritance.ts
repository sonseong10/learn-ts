{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
  }

  class CoffeeMachine implements CoffeeMaker {
    private static SHOULD_BEANS_PRE_SHOT = 7 // 상수인 경우 타입추론 이용하기
    private coffeeBeans: number = 0

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans)
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error(`value for beans be greater then 0: ${beans}`)
      }
      this.coffeeBeans += beans
    }

    clean(): void {
      console.log(`Cleaning... 🧼`)
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`)
      if (this.coffeeBeans < shots * CoffeeMachine.SHOULD_BEANS_PRE_SHOT) {
        throw new Error(`can't make coffee.`)
      }
      this.coffeeBeans -= shots * CoffeeMachine.SHOULD_BEANS_PRE_SHOT
    }

    private preheat(): void {
      console.log("heating up... 🔥")
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots.. ☕`)
      return {
        shots,
        hasMilk: false,
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots)
      this.preheat()
      return this.extract(shots)
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    private steamMilk(): void {
      console.log(`steaming some milk... 🥛`)
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots)
      this.steamMilk()
      return { ...coffee, hasMilk: true }
    }
  }

  const maker = new CoffeeMachine(50)
  maker.makeCoffee(2)
  let coffee = maker.makeCoffee(1)
  console.log(coffee)

  console.log("--------------------------")

  const latteMaker = new CaffeLatteMachine(60)
  coffee = latteMaker.makeCoffee(1)
  console.log(coffee)
}
