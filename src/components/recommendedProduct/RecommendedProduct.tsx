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

const RecommendedProduct = () => {
  const { data: products, isLoading, isError } = useGetProductQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-12">
      <h1 className="text-4xl font-bold">
        Top Picks for Your
        <span className="text-[#21c4a8]">Next Adventure</span>
      </h1>
      <div className="relative w-full mt-6">
        <Carousel
          opts={{
            align: "start",
          }}
          className="mx-5 md:mx-14"
        >
          <CarouselContent>
            {products?.data?.slice(0, 10)?.map((product) => (
              <CarouselItem
                key={product._id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <ProductCard {...product} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {products?.data.length > 0 ? <CarouselPrevious /> : ""}
          {products?.data.length > 0 ? <CarouselNext /> : ""}
        </Carousel>
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
