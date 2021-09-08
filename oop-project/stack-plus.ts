{
  interface Structure<T> {
    readonly size: number
    push(value: T): void
    pop(): T
  }

  type Node<T> = {
    readonly value: T
    readonly next?: Node<T>
  }

  class Stack<T> implements Structure<T> {
    private _size: number = 0
    private head?: Node<T>

    constructor(private maxLength: number) {}

    get size() {
      return this._size
    }
    push(value: T) {
      if (this._size === this.maxLength) {
        throw new Error("Stack is Full!")
      }
      const node = { value, next: this.head }
      this.head = node
      this._size++
    }

    pop(): T {
      if (this.head == null) {
        throw new Error("Stack is empty!")
      }
      const node = this.head
      this.head = node.next
      this._size--
      return node.value
    }
  }

  const stack = new Stack<string>(5)
  stack.push("value1")
  stack.push("value2")
  stack.push("value3")
  while (stack.size !== 0) {
    console.log(stack.pop())
  }

  console.log("---------------------")

  const stack2 = new Stack<number>(5)
  stack2.push(123)
  stack2.push(456)
  stack2.push(789)
  while (stack2.size !== 0) {
    console.log(stack2.pop())
  }
}
