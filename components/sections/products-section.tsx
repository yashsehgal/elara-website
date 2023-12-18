"use client";

import ViewContainer from "@components/layouts/view-container";
import { Button } from "@components/ui/button";
import { cn } from "@utils/cn";
import { ArrowRight, ChevronUp, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "../../common/product";
import { ProductCard } from "@components/ui/product-card";
import { fetchAllProducts } from "@helpers/product-category-manager";
import { motion } from "framer-motion";

const Categories: Array<{ title: string; slug: string }> = [
  {
    title: "Door Locks",
    slug: "door-locks",
  },
  {
    title: "Rose Handles",
    slug: "rose-handles"
  },
  {
    title: "Mortise Handles",
    slug: "mortise-handles"
  },
  {
    title: "Door Kit",
    slug: "door-kit"
  }
]

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
        <div className="product-categories-list flex flex-row items-center justify-center gap-12 my-24 max-xl:grid max-xl:grid-cols-2 max-xl:mx-auto max-xl:w-fit max-lg:grid-cols-1">
          {Categories.map((category, index) => {
            return (
              <motion.div
                className="relative w-52 h-52 rounded-xl bg-gradient-to-tr from-black to-neutral-700 flex flex-col items-start justify-end p-6 cursor-pointer hover:shadow-2xl max-lg:w-[280px]"
                key={index}
                initial={{
                  top: 12 * (index),
                  opacity: 0
                }}
                animate={{
                  top: 0,
                  opacity: 1
                }}
                transition={{
                  type: "spring",
                }}
                whileHover={{
                  scale: 0.95
                }}
              >
                <p className="font-semibold text-2xl text-white w-[4ch]">
                  {category.title}
                </p>
                <ChevronUp
                  className="absolute top-6 right-6 text-white rotate-90"
                />
              </motion.div>
            )
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
