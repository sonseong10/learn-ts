{
  type Fish = {
    name: string
    deep: number
  }

  function swim(fish: Readonly<Fish>) {
    // fish.name = "cat" ☠
  }
}
