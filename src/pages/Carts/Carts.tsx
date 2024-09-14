import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "@/redux/features/cartSlice";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { TRootCartState } from "@/utils/typeOfCarts";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Carts = () => {
  // cart state from the redux store
  const cart = useSelector((state: TRootCartState) => state.cart.carts);
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();

  // only enable the place order button-
  /**
   * if cart length is gater then 0 and
   * every item of the carts product quantity is gather then or qual to the number of order
   */
  useEffect(() => {
    if (
      cart.length > 0 &&
      cart.every((item) => item.productQuantity >= item.oderQuantity)
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [cart]);

  // remove order function
  const handleRemove = (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(removeFromCart(id));
          Swal.fire({
            title: "Removed!",
            text: "Item has been remove from the cart.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error}`,
      });
    }
  };

  // changing order quantity function and update cart item quantity through redux query hooks
  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateQuantity({ _id: id, quantity }));
  };

  // calculating total price
  const total = cart.reduce(
    (acc: number, item) => acc + item.price * item.oderQuantity,
    0
  );

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-center text-5xl font-bold text-black mb-6">Cart</h2>
      {/* displaying all cart items */}
      <div className="flex flex-col gap-6">
        {cart?.map((item) => (
          <div key={item._id} className="md:flex gap-6 mb-6 border p-4 rounded">
            <img
              src={item.images}
              alt={item.pName}
              className="w-full md:w-24 h-24"
            />
            <div className="flex-grow">
              <h3 className="text-2xl font-bold">{item.pName}</h3>
              <p className="text-base">
                Price:{" "}
                <span className="text-lg font-extrabold">${item.price}</span>
              </p>
              <p className="text-base">Category: {item.category}</p>
              <div className="flex items-center gap-2">
                <label>Quantity:</label>
                <input
                  type="number"
                  value={item.oderQuantity}
                  min={1}
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
      <div className="flex md:justify-end text-end">
        <div>
          <div>
            {cart?.map((item) =>
              item.productQuantity >= item.oderQuantity ? (
                <h1 className="text-base font-bold text-blue-500 md:text-end">
                  {item.pName} - ${item.price} * {item.oderQuantity} = $
                  {item.price * item.oderQuantity}
                </h1>
              ) : (
                <h1 className="text-base font-bold text-red-500">
                  {item.pName} - ${item.price} * {item.oderQuantity} (max{" - "}
                  {item.productQuantity}) = {item.price * item.oderQuantity}
                </h1>
              )
            )}
          </div>
          <div className="mt-6 text-2xl font-bold">
            <p>Total: ${total.toFixed(2)}</p>
          </div>

          {isDisabled ? (
            <Button disabled={isDisabled} className="px-10 rounded-xl my-4">
              Place Order
            </Button>
          ) : (
            <NavLink to={"/checkout"}>
              <Button className="bg-[#0ccaab] px-10 text-white rounded-xl hover:bg-gradient-to-r from-cyan-500 to-yellow-500 my-4">
                Place Order
              </Button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carts;
