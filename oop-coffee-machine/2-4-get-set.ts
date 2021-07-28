{
  class School {
    private isClass = "coding"

    get teacher(): string {
      return `${this.uid}번 ${this.name}의 ${this.isClass} 선생님`
    }
    get ClassName(): string {
      return this.isClass
    }
    set ClassName(str: string) {
      this.isClass = str
    }
    constructor(private uid: number, private name: string) {}
  }
  const school = new School(1, "Tom")
  school.ClassName = "History"
  console.log(school.ClassName)
}
