import {
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "@/redux/api/baseApi";
import { Button } from "../ui/button";
import UpdateProduct from "./UpdateProduct";
import Swal from "sweetalert2";
import { useEffect } from "react";

const ProductManagementCard = ({ product }) => {
  console.log(product);
  const { _id, name, images, price, category } = product;
  const [deleteProduct, { isError, isSuccess }] = useDeleteProductMutation();

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    } else if (isError) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to delete product. Please try again.",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  }, [isSuccess, isError]);

  const handleDeletedProduct = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(_id);
      }
    });
  };

  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border text-center">
      <div className="flex-1 flex justify-center items-center">
        <img className="w-40 h-40 mr-10" src={images} alt="" />
      </div>
      <p className="font-semibold flex-1">{name}</p>
      <p className="flex-1">$ {price}</p>
      <p className="flex-1">{category}</p>
      <div className="space-x-5 flex-1">
        <Button
          onClick={handleDeletedProduct}
          className="bg-red-500 rounded-xl"
        >
          <svg
            className="size-5"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            ></path>
          </svg>
        </Button>

        <UpdateProduct product={product} />
      </div>
    </div>
  );
};

export default ProductManagementCard;
