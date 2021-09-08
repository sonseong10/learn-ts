{
  interface Structure {
    readonly size: number
    push(value: string): void
    pop(): string
  }

  type Node = {
    readonly value: string
    next?: Node
  }

  class Stack implements Structure {
    private _size: number = 0
    private head?: Node

    constructor(private maxLength: number) {}

    get size() {
      return this._size
    }
    push(value: string) {
      if (this._size === this.maxLength) {
        throw new Error("Stack is Full!")
      }
      const node: Node = { value, next: this.head }
      this.head = node
      this._size++
    }

    pop(): string {
      if (this.head == null) {
        throw new Error("Stack is empty!")
      }
      const node = this.head
      this.head = node.next
      this._size--
      return node.value
    }
  }

  class Que implements Structure {
    private _size: number = 0
    private head?: Node
    private end?: Node

    constructor(private maxLength: number) {}

    get size() {
      return this._size
    }
    push(value: string) {
      if (this._size === this.maxLength) {
        throw new Error("Stack is Full!")
      }
      const node: Node = { value }
      if (this.head == null) {
        this.head = node
        this.end = node
      } else {
        if (this.end == null) {
          throw new Error("Error!")
        }
        this.end.next = node
        this.end = node
      }
      this._size++
    }

    pop(): string {
      if (this.head == null) {
        throw new Error("Stack is empty!")
      }
      const node = this.head
      this.head = node.next
      this._size--
      return node.value
    }
  }

  const que = new Que(5)
  que.push("value1")
  que.push("value2")
  que.push("value3")
  while (que.size !== 0) {
    console.log(que.pop())
  }

  console.log("---------------------")

  const stack = new Stack(5)
  stack.push("value1")
  stack.push("value2")
  stack.push("value3")
  while (stack.size !== 0) {
    console.log(stack.pop())
  }
}
