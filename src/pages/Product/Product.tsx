import Filter from "@/components/filter/Filter";
import ProductCard from "@/components/share/ProductCard";
import { Button } from "@/components/ui/button";
import { useGetProductQuery } from "@/redux/api/baseApi";
import Loading from "@/utils/Loading";
import { TProductCardProps } from "@/utils/typeOfProduct";
import { useState } from "react";

const Product = () => {
  const [price, setPrice] = useState(2000);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // query params for searching and filtering
  const queryParams = {
    search,
    category,
    minPrice: 0,
    maxPrice: price,
    sortOrder,
  };

  // fetch the products data using a redux query hook
  const { data: products, isLoading } = useGetProductQuery(queryParams);

  // loading state
  if (isLoading) {
    return <Loading />;
  }

  // clear filter function
  const handleClearFilters = () => {
    setPrice(2000);
    setSearch("");
    setCategory("");
    setSortOrder("asc");
  };

  return (
    <div className="md:flex gap-4">
      <div className="md:w-[20%] min-h-screen bg-base-200 p-4 rounded-r-lg pt-16">
        {/* clear button */}
        <Button
          className="bg-white border-2 border-cyan-500 hover:bg-white text-cyan-500"
          onClick={handleClearFilters}
        >
          Reset all filters
        </Button>
        {/* price range filtering section */}
        <div className="space-y-2">
          <p className="flex justify-between items-center">
            Price{" "}
            <span className="text-lg text-cyan-500 font-semibold">
              $ {price}
            </span>
          </p>
          <input
            type="range"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            min={1}
            max={2000}
            step={1}
            className="range range-xs range-primary"
          />
        </div>
        {/* increase and decrease button according to high and low button section */}
        <div className="flex items-center gap-3 mt-3">
          <h1 className="text-base font-semibold">According to price</h1>
          <h6 className="text-lg">:</h6>
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
        <h1 className="text-3xl mt-5 md:mt-0 font-bold text-center">
          All Products
        </h1>
        <div className="mt-8 flex justify-between">
          {/* search section */}
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Please search here....`}
            className="input input-bordered w-full max-w-[300px]"
          />
          {/* filter with category section */}
          <Filter category={category} setCategory={setCategory} />
        </div>
        {/* displaying all products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {products?.data.length <= 0 ? (
            <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center">
              <p>There is no product data, add product</p>
            </div>
          ) : (
            products?.data?.map((product: TProductCardProps) => (
              <ProductCard key={product._id} {...product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
