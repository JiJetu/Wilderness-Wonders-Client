import { TCart } from "@/redux/features/cartSlice";

export type TRootCartState = {
  cart: {
    carts: TCart[];
  };
};

export type TPlaceOrderProps = {
  isDisabled: boolean;
};
