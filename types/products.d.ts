declare type ProductCategoryType =
  | "Door Locks"
  | "Mortise Handles"
  | "Rose Handles"
  | "Door Handles"
  | "Aldrops"
  | "Bathroom Accessories";

declare interface ProductCardInterface {
  imagePathname: string;
  title: string;
  description: string | React.ReactNode;
  slug: string;
  category: string;
  status?: string;
}
