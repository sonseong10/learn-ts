{
  /**
   *  Union Types: OR
   */
  type Direction = "top" | "bottom" | "left" | "right"
  function moving(direction: Direction) {
    console.log(direction)
  }

  moving("left")

  type evenSize = 2 | 4 | 6 | 8
  const size: evenSize = 4
}
