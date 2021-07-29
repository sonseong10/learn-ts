{
  type Fish = {
    name: string
    size: number
    imgURL: string
    deep: "deep" | "shallow"
  }

  type FishMetaData = Pick<Fish, "name" | "size">

  function getFish(name: string): Fish {
    return {
      name,
      size: 14,
      imgURL: "https://...",
      deep: "shallow",
    }
  }

  function getFishMetaData(name: string): FishMetaData {
    return {
      name,
      size: 14,
    }
  }
}
