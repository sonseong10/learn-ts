interface Product {
  id: number;
  name: string;
  price: string;
  brand: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const data: Product[] = [];
  await fetch("https://...")
    .then((response) => response.json())
    .then((item) => data.push(item));
  return data;
};

// interface ShoppingPartial{
//     id?: number | undefined;
//     name?: string | undefined;
//     price?: string | undefined;
//     brand?: string | undefined;
// }

type ProductList = Partial<Product>;
const list: ProductList = {};

// interface ShoppingPick {
//   id: number;
//   name: string;
//   price: number;
// }

type ShoppingItem = Pick<Product, "id" | "name" | "price">;
function displayProductDetail(shoppingItem: ShoppingItem) {}

// interface ShoppingOmit{
//   id: number;
//   name: string;
// }

type ShoppingSkema = Omit<Product, "price" | "brand">;
function displayProductSkema(shoppingItem: ShoppingSkema) {}
