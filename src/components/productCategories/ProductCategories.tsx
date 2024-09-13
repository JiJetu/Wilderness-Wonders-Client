import { productCategory } from "@/utils/typeOfProduct";
import { Button } from "../ui/button";

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3Kv1rAIgg1SHd9MqpVgUajAHGMr9Pjhtrw&s",
      title: productCategory.Backpacks,
    },
    {
      id: 2,
      image:
        "https://static.toiimg.com/thumb/100182603/Planning-a-camping-trip-Heres-what-you-need-to-pack.jpg?width=1200&height=900",
      title: productCategory.Camping,
    },
    {
      id: 3,
      image: "https://files.ekmcdn.com/preppersshop/blogs/camping-clothing.jpg",
      title: productCategory.Clothing,
    },
    {
      id: 4,
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Top-10-camping-foods-hero-image-657a688.jpg?quality=90&resize=556,505",
      title: productCategory.Cooking,
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3U2J4WE6pSexoOicJ0JTJjF8GmtvGT7QhFg&s",
      title: productCategory.FirstAid,
    },
    {
      id: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoITM5lOdfGkuRwitOnPQAkRSHGC8zyFq1Mguiy0NaXuabkdGMmyR1nV8lWJMcQItH1Q&usqp=CAU",
      title: productCategory.FootWear,
    },
    {
      id: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTN67ZFIA3ZvJWhsXgDsFKix7t-Yl_cK3KgQ&s",
      title: productCategory.Lighting,
    },
    {
      id: 8,
      image:
        "https://defiancegearco.com/cdn/shop/articles/3.png?v=1682436262&width=1024",
      title: productCategory.Electronics,
    },
  ];
  return (
    <div className="mt-12">
      <h1 className="text-4xl font-bold">
        Explore Our <span className="text-[#21c4a8]">Product Categories</span>
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8 lg:gap-4 mt-6"
        data-aos="fade-up-left"
        data-aos-duration="1500"
      >
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
