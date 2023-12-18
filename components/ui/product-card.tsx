import { cn } from "@utils/cn";
import { Button } from "./button";
import Image from "next/image";
import Badge from "./badge";

const ProductCard: React.FunctionComponent<ProductCardInterface> = ({
  title,
  description,
  category,
  imagePathname,
  status,
}) => {
  return (
    <div className="product-recommendation-card h-auto p-6 rounded-lg border border-neutral-100 shadow-sm w-full">
      {status === "new" && <Badge text={status} className="ml-2" />}
      <div className="product-display-image-wrapper relative overflow-hidden w-full h-full border border-white bg-white rounded-lg">
        {/* image cleanup -- intentionally added */}
        <div className=" bg-transparent top-0 left-0 w-full h-full  " />
        <Image
          src={imagePathname}
          alt={title}
          className="transition duration-500 scale-105 hover:scale-110 sm:h-72 "
          height={300}
          width={350}
        />
      </div>
      <div className="product-details-wrapper mt-4">
        <div className="flex flex-col items-start">
          <h3 className="product-title tracking-tight font-medium text-lg">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
