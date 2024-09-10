import { TProductCardProps } from "@/utils/typeOfProduct";
import { NavLink } from "react-router-dom";
import Rating from "./Rating";

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
      <div className="shadow-lg rounded-lg hover:text-black overflow-hidden group">
        <img
          className="w-full rounded-lg h-[250px] transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={images}
          alt="img"
        />
        <div className="mt-6 space-y-2 p-5">
          <p className="text-base">Category: {category}</p>
          <h1 className="text-3xl mb-10">{name}</h1>
          <Rating rating={Number(ratting)} />
          <div className="flex justify-between">
            <p className="text-xl font-semibold">$ {price}</p>
            <p
              className={`text-base font-bold ${
                stockQuantity > 0 ? "text-black" : "text-red-500"
              }`}
            >
              Stock: <span>{stockQuantity}</span>
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
