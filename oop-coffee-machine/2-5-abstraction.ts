{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
    fillCoffeeBeans(beans: number): void
    clean(): void
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static SHOULD_BEANS_PRE_SHOT = 7 // 상수인 경우 타입추론 이용하기
    private coffeeBeans: number = 0

    private constructor(coffeeBeans: number) {
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

  //  Plues
  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2)
      console.log(coffee)
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2)
      console.log(coffee)
      this.machine.fillCoffeeBeans(30)
      this.machine.clean()
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(100)

  const amateur = new AmateurUser(maker)
  amateur.makeCoffee()
  console.log("--------------------------")
  const pro = new ProBarista(maker)
  pro.makeCoffee()
}
