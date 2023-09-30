'use client';

import ViewContainer from "@components/layouts/view-container";
import { Button } from "@components/ui/button";
import { cn } from "@utils/cn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
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
        <div className="product-recommendations-options grid grid-cols-4 items-center justify-center gap-6 w-fit mx-auto my-12">
          {categories.map((categoryItem: ProductCategoryType & "All", categoryIndex: number) => {
            return <Button variant={"outline"} className={cn("border-2", (category === categoryItem && "border-red-300 bg-red-50 hover:bg-red-100"))} key={categoryIndex}
              onClick={() => setCategory(categoryItem)}
            >
              {categoryItem}
            </Button>
          })}
          <Link href="/products">
            <Button
              className={cn("text-neutral-100 bg-neutral-800 hover:bg-neutral-700 flex flex-row gap-1 hover:gap-1.5 transition-all")}
            >
              See all products
              <ArrowRight className="w-4 h-auto" />
            </Button>
          </Link>
        </div>
        <div className="product-recommendations-list grid grid-cols-4 w-fit mx-auto items-center center gap-x-20 my-24">
          {Array(4).fill("").map((_, index) => {
            return (
              <ProductRecommendation
                key={index}
              />
            )
          })}
        </div>
        <div className="my-12 flex flex-row items-center justify-center">
          <Link href="/products">
            <Button
              className={cn("flex flex-row gap-1 hover:gap-1.5 transition-all")}
              variant={"outline"}
              size={'lg'}
            >
              See all products
              <ArrowRight className="w-4 h-auto" />
            </Button>
          </Link>
        </div>
      </ViewContainer>
    </section>
  )
};

const ProductRecommendation: React.FunctionComponent = ({ }) => {
  return (
    <div className="product-recommendation-card w-[240px] h-auto p-4 rounded-lg border border-neutral-100 shadow-sm">
      <div className="product-display-image-wrapper w-full h-[180px] border border-transparent bg-neutral-100 rounded-lg" />
      <div className="product-details-wrapper mt-4">
        <div className="flex flex-col items-start">
          <h3 className="product-title tracking-tight font-medium text-lg">
            {"Door lock"}
          </h3>
          <h3 className="product-price tracking-tight font-medium text-base">
            {"Rs. 320.00"}
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-4">
          <Button
            className={cn("text-neutral-100 bg-neutral-800 hover:bg-neutral-700 flex flex-row gap-1 hover:gap-1.5 transition-all")}
            size={"sm"}
          >
            Order now
          </Button>
          <Button variant="outline" size="sm" className="truncate">
            View similar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductSection;