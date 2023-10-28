import { ProductsData } from "@data/products";

const fetchAllProducts = () => {
  return ProductsData;
}
const ProductCategoryType = (category: ProductCategoryType) => {}

const sortProductsByPrice = (order: "l-h" | "h-l", category: ProductCategoryType) => { }

export {
  fetchAllProducts,
  ProductCategoryType,
  sortProductsByPrice
}