import BannerImage from "../../assets/images/camper-2.jpg";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <>
      <div className="md:flex gap-4 justify-center items-center">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-6">
            Explore the Great Outdoors with Wilderness Wonders
          </h1>
          <h3 className="text-lg font-serif mb-2">
            Gear up for your next adventure with the best camping equipment and
            accessories.
          </h3>
          <p className="text-slate-500 mb-4">
            Discover a wide range of high-quality camping gear, from tents and
            backpacks to cooking supplies and hiking essentials. At Wilderness
            Wonders, we have everything you need to make your outdoor
            experiences unforgettable.
          </p>
          <Button className="bg-[#0ccaab] px-10 text-white rounded-xl hover:bg-gradient-to-r from-cyan-500 to-yellow-500">
            Shop Now
          </Button>
        </div>
        <div className="flex-1 mt-8 md:mt-0">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
