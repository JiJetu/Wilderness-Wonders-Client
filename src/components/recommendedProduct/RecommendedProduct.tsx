import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import image from "../../assets/images/camper-1.jpg";
import { Button } from "../ui/button";

const RecommendedProduct = () => {
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
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <img src={image} alt="" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="text-center">
          <Button className="text-[#21c4a8] w-full border-b rounded-xl hover:bg-gradient-to-r from-cyan-500 to-yellow-500 hover:text-white">
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProduct;
