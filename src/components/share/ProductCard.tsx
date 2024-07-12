import { TProductCardProps } from "@/utils/typeOfProduct";

const ProductCard = ({
  name,
  images,
  price,
  stockQuantity,
  category,
  ratting,
}: TProductCardProps) => {
  return (
    <div>
      <img className="w-full" src={images} alt="" />
      <div className="mt-6 space-y-2">
        <p className="text-base">Category: {category}</p>
        <h1 className="text-3xl">{name}</h1>
        <div className="flex justify-between">
          <p>
            Stock: <span>{stockQuantity}</span>
          </p>
          <p>{ratting}</p>
        </div>
        <p className="text-xl font-semibold">$ {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
