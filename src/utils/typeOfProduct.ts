export type TProductCardProps = {
  _id: string;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  category: string;
  ratting: number;
  images: string;
};

export const productCategory = {
  Backpacks: "Backpacks",
  Clothing: "Clothing",
  Cooking: "Cooking",
  FootWear: "FootWear",
  Camping: "Camping",
  FirstAid: "FirstAid",
  Lighting: "Lighting",
  Electronics: "Electronics",
};
