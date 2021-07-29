{
  type Fish = {
    name: string
    size: number
    imgURL: string
    deep: "deep" | "shallow"
  }

  type FishMetaData = Omit<Fish, "imgURL" | "deep">

  // 1 = Different file duplicate function
  function getFish1(name: string): Fish {
    return {
      name,
      size: 14,
      imgURL: "https://...",
      deep: "shallow",
    }
  }

  // 1 = Different file duplicate function
  function getFishMetaData1(name: string): FishMetaData {
    return {
      name,
      size: 14,
    }
  }
}
