import Filter from "@/components/filter/Filter";
import ProductCard from "@/components/share/ProductCard";
import { Button } from "@/components/ui/button";
import { useGetProductQuery } from "@/redux/api/baseApi";
import Loading from "@/utils/Loading";
import { useState } from "react";

const Product = () => {
  const [price, setPrice] = useState(2000);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const queryParams = {
    search,
    category,
    minPrice: 0,
    maxPrice: price,
    sortOrder,
  };

  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductQuery(queryParams);

  console.log(isError);

  if (isLoading) {
    return <Loading />;
  }

  const handleClearFilters = () => {
    setPrice(2000);
    setSearch("");
    setCategory("");
    setSortOrder("asc");
  };
  return (
    <div className="flex gap-4">
      <div className="w-[20%] min-h-screen bg-base-200 p-4 rounded-r-lg pt-16">
        <Button
          className="bg-white border-2 border-cyan-500 hover:bg-white text-cyan-500"
          onClick={handleClearFilters}
        >
          Set Default
        </Button>
        <div className="space-y-2">
          <p className="flex justify-between items-center">
            Price{" "}
            <span className="text-lg text-cyan-500 font-semibold">
              $ {price}
            </span>
          </p>
          <input
            type="range"
            defaultValue={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            min={1}
            max={2000}
            step={1}
            className="range range-sm"
          />
        </div>
        <div className="flex items-center gap-3 mt-3">
          <h1 className="text-base font-semibold">According to price:</h1>
          <div className="flex gap-2">
            <Button
              onClick={() => setSortOrder("desc")}
              className="bg-base-200 border hover:bg-white text-black"
            >
              High
            </Button>
            <Button
              onClick={() => setSortOrder("asc")}
              className="bg-base-200 border hover:bg-white text-black"
            >
              Low
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-center">All Products</h1>
        <div className="mt-8 flex justify-between">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search here"
            className="input input-bordered w-full max-w-[300px]"
          />
          <Filter category={category} setCategory={setCategory} />
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
