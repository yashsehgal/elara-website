'use client';

import ViewContainer from "@components/layouts/view-container";
import { Button } from "@components/ui/button";
import { cn } from "@utils/cn";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const ProductSection: React.FunctionComponent = () => {
  // To handle the toggle state for category filtering.
  const [category, setCategory] = useState<ProductCategoryType | "All">("All");
  // List of options to toggle from.
  const categories: Array<ProductCategoryType & "All"> = [
    "All", 'Door Locks', 'Mortise Handles', 'Rose Handles',
    'Door Handles', 'Aldrops', 'Bathroom Accessories'
  ] as string[] | any;

  return (
    <section className="products-section">
      <ViewContainer className="my-36">
        <h1 className="about-headline text-6xl font-semibold leading-[68px] text-center">
          Our Best Product Recommendations
        </h1>
        <div className="product-recommendations-list grid grid-cols-4 items-center justify-center gap-6 w-fit mx-auto my-12">
          {categories.map((categoryItem: ProductCategoryType & "All", categoryIndex: number) => {
            return <Button variant={"outline"} className={cn("border-2", (category === categoryItem && "border-neutral-800"))} key={categoryIndex}
              onClick={() => setCategory(categoryItem)}
            >
              {categoryItem}
            </Button>
          })}
          <Button
            className={cn("text-neutral-100 bg-neutral-800 hover:bg-neutral-700 flex flex-row gap-1 hover:gap-1.5 transition-all")}
          >
            See all products
            <ArrowRight className="w-4 h-auto" />
          </Button>
        </div>
      </ViewContainer>
    </section>
  )
};

const ProductRecommendation: React.FunctionComponent = ({ }) => {
  return (
    <div className="product-recommendation-card">

    </div>
  )
}

export default ProductSection;