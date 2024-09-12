import { useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";
import { TRootCartState } from "@/utils/typeOfCarts";

const GlobalWarning = () => {
  const cart = useAppSelector((state: TRootCartState) => state.cart.carts);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (cart.length > 0) {
        const message =
          "You have unsaved changes. Are you sure you want to reload?";
        e.preventDefault();

        // event.returnValue = message;

        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cart]);

  return null;
};

export default GlobalWarning;
