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
  const reviews = [
    {
      id: 1,
      image: image,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, enim dolore neque ullam recusandae fuga fugiat!",
      name: "mr.x",
      date: "JUN 2024",
    },
    {
      id: 2,
      image: image,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, enim dolore neque ullam recusandae fuga fugiat!",
      name: "mr.x",
      date: "JUN 2024",
    },
    {
      id: 3,
      image: image,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, enim dolore neque ullam recusandae fuga fugiat!",
      name: "mr.x",
      date: "JUN 2024",
    },
    {
      id: 4,
      image: image,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, enim dolore neque ullam recusandae fuga fugiat!",
      name: "mr.x",
      date: "JUN 2024",
    },
    {
      id: 5,
      image: image,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, enim dolore neque ullam recusandae fuga fugiat!",
      name: "mr.x",
      date: "JUN 2024",
    },
  ];

  return (
    <div className="mt-12 w-full">
      <Carousel className="mx-5 h-full md:mx-14">
        <CarouselContent>
          {reviews.map((rev) => (
            <CarouselItem key={rev.id}>
              <div className="p-1 h-[500px]">
                <Card className="h-full">
                  <CardContent className="flex items-center justify-center h-full p-6">
                    <div className="flex items-center justify-center">
                      <div className="space-y-5 flex-1">
                        <h3 className="text-base text-gray-500">
                          Our Customer reviews
                        </h3>
                        <p className="text-xl font-semibold">{rev.review}</p>
                        <p className="text-base space-x-2 text-gray-500 flex items-center">
                          <span className="text-3xl">-</span>
                          <span>{rev.name}</span> |<span>{rev.date}</span>
                        </p>
                      </div>
                      <div className="flex-1">
                        <img className="h-full" src={image} alt="" />
                      </div>
                    </div>
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
