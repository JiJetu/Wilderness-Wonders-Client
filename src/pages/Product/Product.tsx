import Filter from "@/components/filter/Filter";
import ProductCard from "@/components/share/ProductCard";
import { Button } from "@/components/ui/button";
import { useGetProductQuery } from "@/redux/api/baseApi";
import Loading from "@/utils/Loading";
import { FormEvent, useState } from "react";

const Product = () => {
  const [price, setPrice] = useState(0);
  const [search, setSearch] = useState("");

  const { data: products, isLoading, isError } = useGetProductQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex gap-4">
      <div className="w-[20%] h-screen bg-base-200 p-4 rounded-r-lg pt-10">
        <div className="space-y-2">
          <p className="flex justify-between items-center">
            Price{" "}
            <span className="text-lg text-red-600 font-semibold">
              $ {price}
            </span>
          </p>
          <input
            type="range"
            onChange={(e) => setPrice(Number(e.target.value))}
            min={0}
            max={2000}
            step={10}
            // value={filterData.price}
            className="range range-sm"
          />
        </div>
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-center">All Products</h1>
        <div className="mt-8 flex justify-between">
          <form className="flex" onSubmit={handleSearch}>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search here"
              className="input input-bordered rounded-r-none w-full max-w-[250px]"
            />
            <Button
              type="submit"
              className="text-base py-[24px] rounded-l-none bg-cyan-500"
            >
              Search
            </Button>
          </form>
          <Filter />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {products?.data?.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
