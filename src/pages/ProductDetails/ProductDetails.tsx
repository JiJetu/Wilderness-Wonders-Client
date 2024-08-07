import { Button } from "@/components/ui/button";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/api/baseApi";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Loading from "@/utils/Loading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactImageMagnifier from "simple-image-magnifier/react";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const dispatch = useAppDispatch();
  const [updateProduct, { isSuccess }] = useUpdateProductMutation();
  const cart = useAppSelector((state) => state.cart.carts);
  const [isDisabled, setIsDisabled] = useState(false);
  const productInCart = cart.find((item) => item._id === id);

  console.log(isSuccess);

  useEffect(() => {
    if (productInCart) {
      setIsDisabled(
        productInCart.oderQuantity >= productInCart.productQuantity
      );
    }
  }, [productInCart]);

  if (isLoading) {
    return <Loading />;
  }

  const { images, name, stockQuantity, ratting, price, description, category } =
    data.data;

  const handleAddToCart = () => {
    if (stockQuantity > 0) {
      const cartInfo = {
        _id: id,
        pName: name,
        price: Number(price),
        oderQuantity: 1,
        productQuantity: Number(stockQuantity) - 1,
        description: description,
        category: category,
        images: images,
      };

      dispatch(addToCart(cartInfo));
      const updateData = {
        _id: id,
        product: { stockQuantity: stockQuantity - 1 },
      };
      updateProduct(updateData);

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Product added to cart",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Product is out of stock",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div className="md:flex gap-5 mb-5">
        <div className="flex-1">
          <ReactImageMagnifier
            srcPreview={images}
            srcOriginal={images}
            height={400}
            width={800}
            className="max-w-xs bg-gray-200 rounded-lg md:max-w-none max-h-80 md:max-h-none"
          />
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
          <Button
            onClick={handleAddToCart}
            className={`bg-[#0ccaab] text-white font-semibold text-lg rounded-xl ${
              isDisabled
                ? "opacity-50 cursor-not-allowed bg-black"
                : "hover:bg-gradient-to-r from-cyan-500 to-yellow-500"
            }`}
            disabled={isDisabled}
          >
            {isDisabled ? "Out of Stock" : "Add To Cart"}
          </Button>
        </div>
      </div>
      <p className="text-lg font-bold">Description:</p>
      <p className="text-base text-gray-500 w-full my-5">{description}</p>
    </div>
  );
};

export default ProductDetails;
