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
import { useAppSelector } from "@/redux/hooks";
import Loading from "@/utils/Loading";
import { TPlaceOrderProps, TRootCartState } from "@/utils/typeOfCarts";

const PlaceOrder = ({ isDisabled }: TPlaceOrderProps) => {
  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  const cart = useAppSelector((state: TRootCartState) => state.cart.carts);

  const total = cart.reduce(
    (acc: number, item) => acc + item.price * item.oderQuantity,
    0
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={isDisabled}
          type="submit"
          className={`text-[#06e7c2] border-2  mb-5 ${
            isDisabled ? "text-slate-500" : "bg-white border-cyan-500"
          } w-full rounded-xl hover:bg-gradient-to-r from-cyan-500 to-yellow-500 hover:text-white`}
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
            <Button>Place Order</Button>
          </div>
          <div className="text-center space-y-3">
            <h1>Stripe</h1>
            <Button>Place Order</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlaceOrder;
