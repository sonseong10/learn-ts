{
  type Fish = {
    name: string
    size: number
    color: string
    deep: "deep" | "shallow"
  }

  function dive(fish: Fish, deepTodive: Partial<Fish>): Fish {
    return { ...fish, ...deepTodive }
  }

  const fish: Fish = {
    name: "Mackerel",
    deep: "shallow",
    size: 14,
    color: "blue",
  }
  const swimFish = dive(fish, { deep: "deep" })
  console.log(swimFish)
}
