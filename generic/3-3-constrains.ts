{
  interface Employee {
    pay(): void
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log(`Full time!!`)
    }

    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log(`Part time!!`)
    }

    workPartTime() {}
  }

  // 세부적인 타입 인자는 좋지못함 💩
  // function pay(employee: Employee): Employee {
  //   employee.pay()
  //   return employee
  // }

  // ✨
  function pay<T extends Employee>(employee: T): T {
    employee.pay()
    return employee
  }

  const Tom = new FullTimeEmployee()
  const Anney = new PartTimeEmployee()

  Tom.workFullTime()
  Anney.workPartTime()

  const TomAfterPay = pay(Tom)
  const AnneyAfterPay = pay(Anney)

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
  }

  const obj = {
    name: "Sony",
    age: 32,
  }

  const obj2 = {
    shape: "🔷",
  }

  console.log(getValue(obj, "name"))
  console.log(getValue(obj2, "shape"))
}
