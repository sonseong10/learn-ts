{
  /**
   * Type Aliases
   */

  type Text = string
  const addres: Text = "Korea"

  type Product = {
    name: string
    price: number
  }

  const goods: Product = {
    name: "TV",
    price: 1300,
  }

  /**
   *  String Literal Types
   */
  type Name = "Tom"
  let firstName: Name = "Tom"

  type Bol = true
  const isActive: Bol = true
}
