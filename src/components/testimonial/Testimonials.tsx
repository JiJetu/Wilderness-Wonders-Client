import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import image from "../../assets/images/camper-2.jpg";

const Testimonials = () => {
  return (
    <div className="w-full">
      <Carousel className="mx-5 h-full md:mx-14">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 h-[500px]">
                <Card className="h-full">
                  <CardContent className="flex items-center justify-center h-full p-6">
                    <img className="h-full" src={image} alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;
