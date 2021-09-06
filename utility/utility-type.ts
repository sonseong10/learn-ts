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

type ProductList = Partial<Product>;
const list: ProductList = {};

// interface ShoppingItem {
//   id: number;
//   name: string;
//   price: number;
// }

type ShoppingItem = Pick<Product, "id" | "name" | "price">;
function displayProductDetail(shoppingItem: ShoppingItem) {}
