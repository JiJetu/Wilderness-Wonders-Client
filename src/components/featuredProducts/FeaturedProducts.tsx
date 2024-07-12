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

const FeaturedProducts = () => {
  const { data: products, isLoading, isError } = useGetProductQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-12">
      <h1 className="text-4xl font-bold">
        <span className="text-[#21c4a8]">Featured</span> Products
      </h1>
      <div className="relative w-full mt-6">
        <Carousel
          opts={{
            align: "start",
          }}
          className="mx-5 md:mx-14"
        >
          <CarouselContent>
            {products?.data?.slice(10, 20)?.map((product) => (
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
          {products?.data.length >= 11 ? <CarouselPrevious /> : ""}
          {products?.data.length >= 11 ? <CarouselNext /> : ""}
        </Carousel>
        {products?.data.length >= 11 ? (
          <div className="text-center">
            <Button className="text-[#06e7c2] bg-white w-full border-b rounded-xl hover:bg-gradient-to-r from-cyan-500 to-yellow-500 hover:text-white">
              View More
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
