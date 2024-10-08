import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Loading from "@/utils/Loading";
import { useGetProductQuery } from "@/redux/api/baseApi";
import ProductCard from "../share/ProductCard";
import { NavLink } from "react-router-dom";
import { TProductCardProps } from "@/utils/typeOfProduct";

const FeaturedProducts = () => {
  const { data: products, isLoading } = useGetProductQuery("");

  // loading state
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-12">
      <h1 className="text-4xl font-bold">
        <span className="text-[#21c4a8]">Featured</span> Products
      </h1>

      {/* displaying 11 to 20 number of data with carousel or showing reasonable message if there is no product data */}
      <div className="relative w-full mt-6">
        <Carousel
          opts={{
            align: "start",
          }}
          className="mx-5 md:mx-14"
        >
          {products?.data.length <= 11 ? (
            <div
              data-aos="zoom-out"
              data-aos-duration="1500"
              className="bg-white text-2xl font-bold p-5 flex justify-center items-center"
            >
              <p>There is no featured data, add more data</p>
            </div>
          ) : (
            <CarouselContent data-aos="zoom-out" data-aos-duration="1500">
              {products?.data
                ?.slice(10, 20)
                ?.map((product: TProductCardProps) => (
                  <CarouselItem
                    key={product._id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center p-6">
                          <ProductCard key={product._id} {...product} />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
          )}

          {products?.data.length >= 11 ? <CarouselPrevious /> : ""}
          {products?.data.length >= 11 ? <CarouselNext /> : ""}
        </Carousel>

        {/* showing view more button to redirect to the product page */}
        {products?.data.length >= 11 ? (
          <div className="text-center">
            <NavLink to={"/product"}>
              <Button className="text-[#06e7c2] bg-white w-full border-b rounded-xl hover:bg-gradient-to-r from-cyan-500 to-yellow-500 hover:text-white">
                View More
              </Button>
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
