import { cn } from "@utils/cn"
import { Button } from "./button"
import Image from "next/image"

const ProductCard: React.FunctionComponent<ProductCardInterface> = ({
  title,
  description,
  category,
  slug,
  imagePathname,
  price
}) => {
  return (
    <div className="product-recommendation-card w-[260px] h-auto p-4 rounded-lg border border-neutral-100 shadow-sm">
      <div
        className="product-display-image-wrapper relative overflow-hidden w-full h-[180px] border border-white bg-white rounded-lg"
      >
        {/* image cleanup -- intentionally added */}
        <div className="absolute border-4 border-white bg-transparent top-0 left-0 w-[220px] h-full" />
        <Image
          src={imagePathname}
          width={"220"}
          height={"180"}
          alt={slug}
          className="w-[220px]"
          loading="lazy"
        />
      </div>
      <div className="product-details-wrapper mt-4">
        <div className="flex flex-col items-start">
          <h3 className="product-title tracking-tight font-medium text-lg">
            {title}
          </h3>
          <h3 className="product-price tracking-tight font-medium text-base">
            {"Rs. " + price}
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

export {
  ProductCard
}