import image from "../../assets/images/camper-2.jpg";
import { Button } from "../ui/button";

const ProductCategories = () => {
  return (
    <div className="mt-12">
      <h1 className="text-4xl font-bold">
        Explore Our <span className="text-[#21c4a8]">Product Categories</span>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8 lg:gap-4 mt-6">
        <div className="relative h-40 md:h-72">
          <img className="h-full" src={image} alt="" />
          <div className="absolute bottom-3 left-3 text-white space-y-4">
            <h1 className="text-xl md:text-4xl">Backpacks</h1>
            <Button className="bg-[#3fd1b9] rounded md:px-10 hover:bg-gradient-to-r from-cyan-500 to-yellow-500">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
