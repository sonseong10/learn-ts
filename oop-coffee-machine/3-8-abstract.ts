{
  type CoffeeCup = {
    shots: number
    hasMilk?: boolean
    hasIce?: boolean
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static SHOULD_BEANS_PRE_SHOT = 7 // 상수인 경우 타입추론 이용하기
    private coffeeBeans: number = 0

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans
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

    protected abstract extract(shots: number): CoffeeCup

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

    protected extract(shots: number): CoffeeCup {
      this.steamMilk()
      console.log(`Pulling ${shots} shots.. ☕`)
      return {
        shots,
        hasMilk: true,
      }
    }
  }

  class IceCoffeeMaker extends CoffeeMachine {
    private addIce(): void {
      console.log(`Adding ice... 🧊`)
    }
    protected extract(shots: number): CoffeeCup {
      this.addIce()
      console.log(`Pulling ${shots} shots.. ☕`)
      return {
        shots,
        hasIce: true,
      }
    }
  }

  const machines: CoffeeMaker[] = [
    new IceCoffeeMaker(16),
    new CaffeLatteMachine(16),
    new IceCoffeeMaker(16),
    new CaffeLatteMachine(16),
  ]

  machines.map((machine) => {
    console.log("--------------------------")
    machine.makeCoffee(1)
  })
}
