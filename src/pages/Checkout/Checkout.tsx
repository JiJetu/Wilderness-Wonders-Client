import React, { useState, useEffect, FormEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAppDispatch } from "@/redux/hooks";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/api/baseApi";
import { Button } from "@/components/ui/button";
import Loading from "@/utils/Loading";

const Checkout = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const [updateProduct] = useUpdateProductMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [productDetails, setProductDetails] = useState<any>(null);

  useEffect(() => {
    if (data) {
      setProductDetails(data.data);
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  const { images, name, stockQuantity, price, description, category } =
    productDetails || {};

  const handleAddProduct = async (e: FormEvent) => {
    e.preventDefault();

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product added to cart successfully!",
      showConfirmButton: false,
      timer: 1500,
    });

    navigate("/cart");
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
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <p className="label-text">Email</p>
            </label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-6 mb-6">
          <div className="form-control w-1/2">
            <label className="label">
              <p className="label-text">Product Price</p>
            </label>
            <input
              type="text"
              name="price"
              value={price || ""}
              disabled
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <p className="label-text">Product Category</p>
            </label>
            <input
              type="text"
              name="category"
              value={category || ""}
              disabled
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-6 mb-6">
          <div className="form-control w-1/2">
            <label className="label">
              <p className="label-text">Order Quantity</p>
            </label>
            <input
              type="number"
              name="orderQuantity"
              value={orderQuantity}
              onChange={(e) => setOrderQuantity(Number(e.target.value))}
              placeholder="Enter quantity"
              min={1}
              max={stockQuantity}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <p className="label-text">Product Name</p>
            </label>
            <input
              type="text"
              value={name || ""}
              disabled
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="text-[#06e7c2] border-2 border-cyan-500 mb-5 bg-white w-full rounded-xl hover:bg-gradient-to-r from-cyan-500 to-yellow-500 hover:text-white"
        >
          Add info
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
