"use client";
import ViewContainer from "@components/layouts/view-container";
import { Button } from "@components/ui/button";
import { cn } from "@utils/cn";
import { useEffect, useState } from "react";
import { categories } from "../../common/product";
import { ProductCard } from "@components/ui/product-card";
import { fetchAllProducts } from "@helpers/product-category-manager";
import { Input } from "@components/ui/input";

const ProductsView: React.FunctionComponent = () => {
  const [category, setCategory] = useState<ProductCategoryType | "All">("All");
  const allCategories: Array<ProductCategoryType & "All"> = [
    "All",
    ...categories,
  ] as string[] | any;
  const [allProducts, setAllProducts] = useState<Array<ProductCardInterface>>(
    fetchAllProducts()
  );
  const [searchInput, setSearchInput] = useState<string>("");

  const handleFilter = (value: string) => {
    if (!value) setAllProducts(fetchAllProducts());
    else {
      setAllProducts(fetchAllProducts());
      let _newProductList: Array<ProductCardInterface> = [] as any;
      _newProductList = allProducts.filter((product, _) => {
        return product.title.toLowerCase().includes(searchInput.toLowerCase());
      });
      setAllProducts(_newProductList);
    }
  };

  useEffect(() => {
    if (!allProducts) setAllProducts(fetchAllProducts());
  }, [searchInput, allProducts]);

  return (
    <div className="products-view">
      <ViewContainer className="my-16">
        <h1 className="leading-snug tracking-tight font-semibold text-5xl">
          Locks & Accessories by Elara
        </h1>
        <p className="text-lg text-neutral-500 mt-4">
          We have something for everyone, from locks to door handles, and
          everything in between to make your home more secure and beautiful.
        </p>

        <div className="products-list-container">
          <div className="product-recommendations-options flex flex-row flex-wrap items-center justify-start gap-6 my-6">
            {allCategories.map(
              (
                categoryItem: ProductCategoryType & "All",
                categoryIndex: number
              ) => {
                return (
                  <Button
                    variant={"outline"}
                    className={cn(
                      "border-2 truncate",
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
          </div>
          <div className="search-filter-container">
            <Input
              type="text"
              placeholder="Search by name, category or model number"
              onChange={(e) => {
                setSearchInput(e.target.value as string);
                handleFilter(e.target.value as string);
              }}
              value={searchInput}
            />
          </div>
        </div>
        <div>
          <div className="product-items-container grid grid-cols-1 sm:grid-cols-3 w-full mx-auto items-center center gap-10 my-8">
            {allProducts.map((product, index) => {
              return (
                <ProductCard
                  title={product.title}
                  description={product.description}
                  slug={product.slug}
                  imagePathname={product.imagePathname}
                  category={product.category}
                  status={product.status}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </ViewContainer>
    </div>
  );
};

export default ProductsView;
