import { Button } from "@/components/ui/button";
import { useGetSingleProductQuery } from "@/redux/api/baseApi";
import Loading from "@/utils/Loading";
import { NavLink, useParams } from "react-router-dom";

const ProductDetails = () => {
  const id = useParams();
  console.log(id.id);
  const { data, isLoading, isError } = useGetSingleProductQuery(id.id);

  if (isLoading) {
    return <Loading />;
  }

  const { images, name, stockQuantity, ratting, price, description, category } =
    data.data;

  return (
    <div>
      <div className="md:flex gap-5 mb-5">
        <div className="flex-1 h-[400px]">
          <img className="w-full h-full rounded-lg" src={images} alt="" />
        </div>
        <div className="w-2/6 space-y-2">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-base font-semibold">Stock: {stockQuantity}</p>
          <p className="text-lg">{ratting}</p>
          <p className="text-lg font-semibold space-x-3">
            <span>Category:</span>
            <span className="text-cyan-500 uppercase">{category}</span>
          </p>
          <p className="text-2xl text-cyan-600 font-bold">$ {price}</p>
          <NavLink to="/checkout">
            <Button className="bg-[#0ccaab] text-white font-semibold text-lg rounded-xl hover:bg-gradient-to-r from-cyan-500 to-yellow-500 mt-4">
              Checkout
            </Button>
          </NavLink>
        </div>
      </div>
      <p className="text-base text-gray-500 w-full">{description}</p>
    </div>
  );
};

export default ProductDetails;
