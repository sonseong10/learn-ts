interface ProductInfo {
  uid: number;
  name: string;
  price: string;
}

// interface ProductBus {
//   uid?: number;
//   name?: string;
//   price?: string;
// }

// #1
// type ProductBus = {
//   uid?: ProductInfo['uid'];
//   name?: ProductInfo['name'];
//   price?: ProductInfo['price'];
// };

// #2
// type ProductBus = {
//   [p in 'uid' | 'name' | 'price']? : ProductInfo
// };

// #3
// type ProductBus = {
//   [p in keyof ProductInfo]? : ProductInfo
// };

// #4
type ProductBus<T> = {
  [p in keyof T]?: T[p];
};
