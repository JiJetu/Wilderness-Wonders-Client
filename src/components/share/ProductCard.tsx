import { TProductCardProps } from "@/utils/typeOfProduct";
import { NavLink } from "react-router-dom";

const ProductCard = ({
  _id,
  name,
  images,
  price,
  stockQuantity,
  category,
  ratting,
}: TProductCardProps) => {
  return (
    <NavLink to={`/product/${_id}`}>
      <div className="shadow-lg rounded-lg">
        <img className="w-full rounded-lg" src={images} alt="" />
        <div className="mt-6 space-y-2 p-5">
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
    </NavLink>
  );
};

export default ProductCard;
