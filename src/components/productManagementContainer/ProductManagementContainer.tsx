import { useGetProductQuery } from "@/redux/api/baseApi";
import AddProduct from "./AddProduct";
import ProductManagementCard from "./ProductManagementCard";
import Loading from "@/utils/Loading";
import { TProductCardProps } from "@/utils/typeOfProduct";

const ProductManagementContainer = () => {
  const { data: products, isLoading } = useGetProductQuery([]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-8">
      <h1 className="text-4xl text-center font-bold font-serif">
        Product Management
      </h1>
      <div className="my-4">
        <div className="flex justify-center md:justify-end">
          <AddProduct />
        </div>
        <div className="bg-gradient-to-r from-cyan-500 to-yellow-500 w-full h-full rounded-xl p-[5px] mt-5">
          {products?.data.length === 0 ? (
            <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center">
              <p>There is no Product data</p>
            </div>
          ) : (
            <div className="p-5 bg-white w-full h-full rounded-lg space-y-3 ">
              <div className="bg-white rounded-md md:flex justify-between items-center p-3 border-2 border-cyan-500 text-center">
                <p className="flex-1">Image</p>
                <p className="flex-1">Product Name</p>
                <p className="flex-1">Product Price</p>
                <p className="flex-1">Product Category</p>
                <p className="flex-1">Action</p>
              </div>
              {products?.data?.map((product: TProductCardProps) => (
                <ProductManagementCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductManagementContainer;
