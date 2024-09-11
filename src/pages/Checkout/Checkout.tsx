import { useState, FormEvent, useEffect } from "react";
import Swal from "sweetalert2";
import PlaceOrder from "./PlaceOrder";

const Checkout = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNo, setUserNo] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (userEmail && userNo && userName && userAddress) {
      setIsDisabled(false);
    }
  }, [userEmail, userNo, userName, userAddress]);

  const handleAddProduct = async (e: FormEvent) => {
    e.preventDefault();

    // Swal.fire({
    //   position: "top-end",
    //   icon: "success",
    //   title: "Product added to cart successfully!",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
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
              <p className="label-text">Phone Number</p>
            </label>
            <input
              type="text"
              value={userNo}
              onChange={(e) => setUserNo(e.target.value)}
              placeholder="Enter your phone number"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <p className="label-text">Delivery address</p>
            </label>
            <input
              type="text"
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
              placeholder="Enter your delivery address"
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <PlaceOrder isDisabled={isDisabled} />
      </form>
    </div>
  );
};

export default Checkout;
