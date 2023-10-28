'use client';
import ViewContainer from "@components/layouts/view-container";
import { Button } from "@components/ui/button";
import { cn } from "@utils/cn";
import { useState } from "react";
import { categories } from "../../common/product";
import { ProductCard } from "@components/ui/product-card";
import { fetchAllProducts } from "../../helpers/productCategoryManager";

const ProductsView: React.FunctionComponent = () => {
  // To handle the toggle state for category filtering.
  const [category, setCategory] = useState<ProductCategoryType | "All">("All");
  // List of options to toggle from.
  const allCategories: Array<ProductCategoryType & "All"> = [
    "All", ...categories] as string[] | any;
  // List of all the products
  const [allProducts, setAllProducts]
    = useState<Array<ProductCardInterface>>(fetchAllProducts());
  return (
    <div className="products-view">
      <ViewContainer className="my-16">
        <h1 className="leading-snug tracking-tight font-semibold text-5xl">Locks & Accessories by Elara</h1>
        <div className="products-list-container">
          <div className="product-recommendations-options flex flex-row items-center justify-start gap-6 my-6 overflow-x-scroll">
            {allCategories.map((categoryItem: ProductCategoryType & "All", categoryIndex: number) => {
              return <Button variant={"outline"} className={cn("border-2 truncate", (category === categoryItem && "border-red-300 bg-red-50 hover:bg-red-100"))} key={categoryIndex}
                onClick={() => setCategory(categoryItem)}
              >
                {categoryItem}
              </Button>
            })}
          </div>
          <div className="product-items-container grid grid-cols-4 w-fit mx-auto items-center center gap-x-20 gap-y-16 my-24">
            {allProducts.map((product, index) => {
              return (
                <ProductCard
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  slug={product.slug}
                  imagePathname={product.imagePathname}
                  category={product.category}
                  key={index}
                />
              )
            })}
          </div>
        </div>
      </ViewContainer>
    </div>
  )
};

export default ProductsView;