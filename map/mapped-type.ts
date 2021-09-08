type Product = "TV" | "Oven" | "Cup";

type ProductList = { [p in Product]: string };

const item: ProductList = {
  TV: "samsung",
  Oven: "lg",
  Cup: "daiso",
};
