{
  type CoffeeCup = {
    shots: number
    hasMilk?: boolean
    hasIce?: boolean
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
  }

  class CoffeeMachine implements CoffeeMaker {
    private static SHOULD_BEANS_PRE_SHOT = 7 // 상수인 경우 타입추론 이용하기
    private coffeeBeans: number = 0

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private ice: AutometicIce
    ) {
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
      const coffee = this.extract(shots)
      const iceAdded = this.ice.addIce(coffee)
      return this.milk.makeMilk(iceAdded)
    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup
  }

  interface AutometicIce {
    addIce(cup: CoffeeCup): CoffeeCup
  }

  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log(`steaming some milk... 🥛`)
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk()
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log(`Fancy steaming some milk... 🥛`)
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk()
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log(`Fancy Coolding some milk... 🥛`)
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk()
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup
    }
  }

  class AutometicAddIce implements AutometicIce {
    private getIce(): boolean {
      console.log(`Getting ice... 🧊`)
      return true
    }

    addIce(cup: CoffeeCup): CoffeeCup {
      const ice = this.getIce()
      return {
        ...cup,
        hasIce: ice,
      }
    }
  }

  class AutometicAddMilkIce implements AutometicIce {
    private getIce(): boolean {
      console.log(`Getting Milk Ice... 🧊`)
      return true
    }

    addIce(cup: CoffeeCup): CoffeeCup {
      const ice = this.getIce()
      return {
        ...cup,
        hasIce: ice,
      }
    }
  }

  class NoIce implements AutometicIce {
    addIce(cup: CoffeeCup): CoffeeCup {
      return cup
    }
  }

  // Maker
  const cheapmilkMaker = new CheapMilkSteamer()
  const fancyMilkMaker = new FancyMilkSteamer()
  const coldMilkMaker = new ColdMilkSteamer()
  const noMilkMaker = new NoMilk()

  const iceMaker = new AutometicAddIce()
  const milkIceMaker = new AutometicAddMilkIce()
  const noIceMaker = new NoIce()

  // Machine
  const americnoMachine = new CoffeeMachine(30, noMilkMaker, noIceMaker)
  const iceAmericnoMachine = new CoffeeMachine(40, noMilkMaker, iceMaker)
  const latteMachine = new CoffeeMachine(50, fancyMilkMaker, noIceMaker)
  const coldLatteMachine = new CoffeeMachine(30, coldMilkMaker, milkIceMaker)

  americnoMachine.makeCoffee(2)
  console.log("-------------------------")
  iceAmericnoMachine.makeCoffee(1)
  console.log("-------------------------")
  latteMachine.makeCoffee(1)
  console.log("-------------------------")
  coldLatteMachine.makeCoffee(2)
}
