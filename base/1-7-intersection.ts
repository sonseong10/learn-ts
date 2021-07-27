{
  /**
   * Intersection Types: and
   */
  type Product = {
    name: string
    price: number
  }

  type Seller = {
    uid: number
    show: () => void
  }

  function market(person: Product & Seller) {
    console.log(person.name, person.uid, person.show)
  }

  market({
    name: "TV",
    price: 13000,
    uid: 1,
    show: () => {},
  })
}
