import { Button } from "@/components/ui/button";
import { useGetSingleProductQuery } from "@/redux/api/baseApi";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import Loading from "@/utils/Loading";
import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const [userName, setUserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [orderQuantity, setOrderQuantity] = useState(1);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <Loading />;
  }
  const { images, name, stockQuantity, ratting, price, description, category } =
    data.data;

  const handleAddProduct = (e: FormEvent) => {
    e.preventDefault();
    const cartInfo = {
      _id: id,
      uName: userName,
      uEmail: userEmail,
      pName: userName,
      price: Number(price),
      orderQuantity: Number(orderQuantity),
      description: description,
      category: category,
      images: images,
    };

    dispatch(addToCart(cartInfo));
  };
  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-center text-5xl font-bold text-black mb-6">
        Checkout
      </h2>
      <form onSubmit={handleAddProduct}>
        <div className="flex gap-6 mb-6">
          <div className="form-control w-1/2">
            <label className="label">
              <p className="label-text">Name</p>
            </label>
            <label className="input-group">
              <input
                type="text"
                onBlur={(e) => setUserName(e.target.value)}
                placeholder="enter your name"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <p className="label-text">User Email</p>
            </label>
            <label className="input-group">
              <input
                type="email"
                onBlur={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-6 mb-6">
          <div className="form-control w-1/2">
            <label className="label">
              <p className="label-text">Product Price</p>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={price}
                disabled
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <p className="label-text">Product Category</p>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={category}
                disabled
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-6 mb-6">
          <div className="form-control w-1/2">
            <label className="label">
              <p className="label-text">Order Quantity</p>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="order"
                onBlur={(e) => setOrderQuantity(e.target.value)}
                placeholder="enter the number of product you want"
                min={1}
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <p className="label-text">Product Name</p>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={name}
                disabled
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <Button
          type="submit"
          className="text-[#06e7c2] border-2 border-cyan-500   mb-5 bg-white w-full rounded-xl hover:bg-gradient-to-r from-cyan-500 to-yellow-500 hover:text-white"
        >
          Add to Cart
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
