import { productCategory } from "@/utils/typeOfProduct";
import image from "../../assets/images/camper-2.jpg";
import { Button } from "../ui/button";

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      image: image,
      title: productCategory.Backpacks,
    },
    {
      id: 2,
      image: image,
      title: productCategory.Camping,
    },
    {
      id: 3,
      image: image,
      title: productCategory.Clothing,
    },
    {
      id: 4,
      image: image,
      title: productCategory.Cooking,
    },
    {
      id: 5,
      image: image,
      title: productCategory.FirstAid,
    },
    {
      id: 6,
      image: image,
      title: productCategory.FootWear,
    },
    {
      id: 7,
      image: image,
      title: productCategory.Lighting,
    },
    {
      id: 8,
      image: image,
      title: productCategory.Electronics,
    },
  ];
  return (
    <div className="mt-12">
      <h1 className="text-4xl font-bold">
        Explore Our <span className="text-[#21c4a8]">Product Categories</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8 lg:gap-4 mt-6">
        {categories.map((category) => (
          <div key={category.id} className="relative h-40 md:h-72">
            <img className="h-full w-full" src={category.image} alt="" />
            <div className="absolute bottom-3 left-3 text-white space-y-4">
              <h1 className="text-xl md:text-4xl">{category.title}</h1>
              <Button className="bg-[#3fd1b9] rounded md:px-10 hover:bg-gradient-to-r from-cyan-500 to-yellow-500">
                Shop Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
