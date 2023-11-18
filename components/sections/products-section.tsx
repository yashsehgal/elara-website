"use client";

import ViewContainer from "@components/layouts/view-container";
import { Button } from "@components/ui/button";
import { cn } from "@utils/cn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "../../common/product";
import { ProductCard } from "@components/ui/product-card";
import { fetchAllProducts } from "@helpers/product-category-manager";

const ProductSection: React.FunctionComponent = () => {
  const [category, setCategory] = useState<ProductCategoryType | "All">("All");
  const allCategories: Array<ProductCategoryType & "All"> = [
    "All",
    ...categories,
  ] as string[] | any;
  const [allProducts, setAllProducts] = useState<Array<ProductCardInterface>>(
    fetchAllProducts()
  );

  useEffect(() => {
    if (!allProducts) setAllProducts(fetchAllProducts());
  }, [allProducts]);

  return (
    <section className="products-section">
      <ViewContainer className="my-36">
        <div
          className="flex flex-col justify-center items-center
        max-w-3xl mx-auto
        "
        >
          <h1 className="about-headline text-4xl sm:text-6xl font-semibold sm:leading-[68px] text-center ">
            Best in class locks and home fittings
          </h1>
          <p className="about-description text-center mt-4 max-w-xl text-neutral-500 text-lg">
            We have something for everyone, from locks to door handles, and
            everything in between to make your home more secure and beautiful.
          </p>
        </div>
        {/* <div className="product-recommendations-options grid grid-cols-4 items-center justify-center gap-6 w-fit mx-auto my-12">
          {allCategories.map(
            (
              categoryItem: ProductCategoryType & "All",
              categoryIndex: number
            ) => {
              return (
                <Button
                  variant={"outline"}
                  className={cn(
                    "border-2",
                    category === categoryItem &&
                      "border-red-300 bg-red-50 hover:bg-red-100"
                  )}
                  key={categoryIndex}
                  onClick={() => setCategory(categoryItem)}
                >
                  {categoryItem}
                </Button>
              );
            }
          )}
          <Link href="/products">
            <Button
              className={cn(
                "text-neutral-100 bg-neutral-800 hover:bg-neutral-700 flex flex-row gap-1 hover:gap-1.5 transition-all"
              )}
            >
              See all products
              <ArrowRight className="w-4 h-auto" />
            </Button>
          </Link>
        </div> */}
        <div className="product-recommendations-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center center gap-10 my-24">
          {allProducts.map((product, index) => {
            if (index < 6) {
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
              );
            }
          })}
        </div>{" "}
        <div className=" flex flex-col md:flex-row items-center justify-center mx-auto w-full md:w-fit gap-4">
          <Link href="/about-products">
            <Button variant={"outline"} size={"lg"}>
              About our products
            </Button>
          </Link>
          <Link href="/products">
            <Button
              className={cn("flex flex-row gap-1 hover:gap-1.5 transition-all")}
              size={"lg"}
            >
              {"Explore Products"}
              <ArrowRight className="w-4 h-auto" />
            </Button>
          </Link>
        </div>
      </ViewContainer>
    </section>
  );
};

export default ProductSection;
