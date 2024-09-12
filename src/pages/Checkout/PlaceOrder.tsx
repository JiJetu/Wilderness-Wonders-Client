import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUpdateProductMutation } from "@/redux/api/baseApi";
import { removeFromCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Loading from "@/utils/Loading";
import { TPlaceOrderProps, TRootCartState } from "@/utils/typeOfCarts";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PlaceOrder = ({ isDisabled }: TPlaceOrderProps) => {
  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  const cart = useAppSelector((state: TRootCartState) => state.cart.carts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc: number, item) => acc + item.price * item.oderQuantity,
    0
  );

  const handleCD = async () => {
    try {
      for (const items of cart) {
        const updateData = {
          _id: items._id,
          product: {
            stockQuantity: items.productQuantity - items.oderQuantity,
          },
        };

        await updateProduct(updateData).unwrap();
        await dispatch(removeFromCart(items._id as string));
      }

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Order succeeded",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/product");
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Order failed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={isDisabled}
          type="submit"
          className={`text-white border-2  mb-5 ${
            isDisabled
              ? "text-slate-500"
              : "bg-gradient-to-r from-cyan-500 to-yellow-500 border-cyan-500"
          } w-full rounded-xl hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-[#06e7c2]`}
        >
          Submit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle style={{ textAlign: "center" }}>
            Payment Method
          </DialogTitle>
          <DialogDescription style={{ textAlign: "center", marginTop: "14px" }}>
            Your total price:{" "}
            <span className="text-base font-extrabold text-black">
              ${total}
            </span>
            . Select the payment method
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-between items-center">
          <div className="text-center space-y-3">
            <h1>Cash on Delivery</h1>
            <Button onClick={handleCD}>Place Order</Button>
          </div>
          <div className="text-center space-y-3">
            <h1>Stripe</h1>
            <Button disabled>Place Order</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlaceOrder;
