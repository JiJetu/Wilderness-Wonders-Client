import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useGetProductQuery } from "@/redux/api/baseApi";
import Loading from "@/utils/Loading";
import ProductCard from "../share/ProductCard";
import { NavLink } from "react-router-dom";
import { TProductCardProps } from "@/utils/typeOfProduct";

const RecommendedProduct = () => {
  // fetching products data using a redux query hook.
  const { data: products, isLoading } = useGetProductQuery(undefined);

  // loading state
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-12">
      <h1 className="text-4xl font-bold">
        Top Picks for Your
        <span className="text-[#21c4a8]">Next Adventure</span>
      </h1>

      {/* displaying first 10 data with carousel or showing reasonable message if there is no product data */}
      <div className="relative w-full mt-6">
        <Carousel
          opts={{
            align: "start",
          }}
          className="mx-5 md:mx-14"
        >
          {products?.data.length <= 0 ? (
            <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center">
              <p>There is no featured data, add more data</p>
            </div>
          ) : (
            <CarouselContent>
              {products?.data
                ?.slice(0, 10)
                ?.map((product: TProductCardProps) => (
                  <CarouselItem
                    key={product._id}
                    className="md:basis-1/2 lg:basis-1/4 mx-auto"
                  >
                    <div className="p-1 flex flex-col h-full">
                      <Card className="flex flex-col h-full">
                        <CardContent
                          className="p-2 flex-grow"
                          data-aos="fade-up-right"
                          data-aos-duration="1500"
                        >
                          <ProductCard {...product} />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
          )}
          {products?.data.length > 0 ? <CarouselPrevious /> : ""}
          {products?.data.length > 0 ? <CarouselNext /> : ""}
        </Carousel>

        {/* showing view more button to redirect to the product page */}
        {products?.data.length > 0 ? (
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

export default RecommendedProduct;
