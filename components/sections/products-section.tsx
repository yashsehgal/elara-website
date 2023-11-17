'use client';

import ViewContainer from "@components/layouts/view-container";
import { Button } from "@components/ui/button";
import { cn } from "@utils/cn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "../../common/product";
import { ProductCard } from "@components/ui/product-card";
import { fetchAllProducts } from "../../helpers/ProductCategoryManager";

const ProductSection: React.FunctionComponent = () => {
  // To handle the toggle state for category filtering.
  const [category, setCategory] = useState<ProductCategoryType | "All">("All");
  // List of options to toggle from.
  const allCategories: Array<ProductCategoryType & "All"> = ["All", ...categories] as string[] | any;
  // List of all the products
  const [allProducts, setAllProducts]
    = useState<Array<ProductCardInterface>>(fetchAllProducts());

  useEffect(() => {
    if (!allProducts) setAllProducts(fetchAllProducts());
  }, [allProducts]);


  return (
    <section className="products-section">
      <ViewContainer className="my-36">
        <h1 className="about-headline text-6xl font-semibold leading-[68px] text-center">
          Our Best Product Recommendations
        </h1>
        <div className="product-recommendations-options grid grid-cols-4 items-center justify-center gap-6 w-fit mx-auto my-12">
          {allCategories.map((categoryItem: ProductCategoryType & "All", categoryIndex: number) => {
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
          {allProducts.map((product, index) => {
            // custom limiter to 4 cards initially
            if (index < 4) {
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
            }
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

export default ProductSection;