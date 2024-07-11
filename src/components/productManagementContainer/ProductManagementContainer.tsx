import AddProduct from "./AddProduct";
import ProductManagementCard from "./ProductManagementCard";

const ProductManagementContainer = () => {
  return (
    <div className="mt-8">
      <h1 className="text-4xl text-center font-bold font-serif">
        Product Management
      </h1>
      <div>
        <div className="flex justify-end">
          <AddProduct />
        </div>
        <div className="bg-gradient-to-r from-cyan-500 to-yellow-500 w-full h-full rounded-xl p-[5px] mt-5">
          <div className="p-5 bg-white w-full h-full rounded-lg space-y-3 ">
            <ProductManagementCard />
          </div>
          {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center">
            <p>There is no task pending</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductManagementContainer;
