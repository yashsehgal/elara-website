'use client';
import ViewContainer from "@components/layouts/view-container";
import { Button } from "@components/ui/button";
import { cn } from "@utils/cn";
import { useState } from "react";

const ProductsView: React.FunctionComponent = () => {
  // To handle the toggle state for category filtering.
  const [category, setCategory] = useState<ProductCategoryType | "All">("All");
  // List of options to toggle from.
  const categories: Array<ProductCategoryType & "All"> = [
    "All", 'Door Locks', 'Mortise Handles', 'Rose Handles',
    'Door Handles', 'Aldrops', 'Bathroom Accessories'
  ] as string[] | any;
  return (
    <div className="products-view">
      <ViewContainer className="my-16">
        <h1 className="leading-snug tracking-tight font-semibold text-5xl">Locks & Accessories by Elara</h1>
        <div className="products-list-container">
          <div className="product-recommendations-options flex flex-row items-center justify-start gap-6 my-6 overflow-x-scroll">
            {categories.map((categoryItem: ProductCategoryType & "All", categoryIndex: number) => {
              return <Button variant={"outline"} className={cn("border-2 truncate", (category === categoryItem && "border-red-300 bg-red-50 hover:bg-red-100"))} key={categoryIndex}
                onClick={() => setCategory(categoryItem)}
              >
                {categoryItem}
              </Button>
            })}
          </div>
        </div>
      </ViewContainer>
    </div>
  )
};

export default ProductsView;