import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "@/redux/features/cartSlice";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { TRootCartState } from "@/utils/typeOfCarts";
import { useEffect, useState } from "react";

const Carts = () => {
  const cart = useSelector((state: TRootCartState) => state.cart.carts);
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.length > 0) {
      setIsDisabled(false);
    }
  }, [cart]);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateQuantity({ _id: id, quantity }));
  };

  const total = cart.reduce(
    (acc: number, item) => acc + item.price * item.oderQuantity,
    0
  );

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-center text-5xl font-bold text-black mb-6">Cart</h2>
      <div className="flex flex-col gap-6">
        {cart.map((item) => (
          <div key={item._id} className="flex gap-6 mb-6 border p-4 rounded">
            <img src={item.images} alt={item.pName} className="w-24 h-24" />
            <div className="flex-grow">
              <h3 className="text-2xl font-bold">{item.pName}</h3>
              <p className="text-base">Price: ${item.price}</p>
              <p className="text-base">Category: {item.category}</p>
              <p className="text-base mb-2">Description: {item.description}</p>
              <div className="flex items-center gap-2">
                <label>Quantity:</label>
                <input
                  type="number"
                  value={item.oderQuantity}
                  min={1}
                  max={item.productQuantity}
                  onChange={(e) =>
                    handleQuantityChange(
                      item._id as string,
                      Number(e.target.value)
                    )
                  }
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <Button
              onClick={() => handleRemove(item._id!)}
              className="bg-red-500 text-white font-semibold text-lg rounded-xl hover:bg-red-700 mt-4"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <div>
          <div className="mt-6 text-2xl font-bold">
            <p>Total: ${total.toFixed(2)}</p>
          </div>
          {isDisabled ? (
            <Button disabled={isDisabled} className="px-10 rounded-xl my-4">
              Checkout
            </Button>
          ) : (
            <NavLink to={"/checkout"}>
              <Button className="bg-[#0ccaab] px-10 text-white rounded-xl hover:bg-gradient-to-r from-cyan-500 to-yellow-500 my-4">
                Checkout
              </Button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carts;
