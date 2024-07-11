import HeroSection from "@/components/heroSection/HeroSection";
import ProductCategories from "@/components/productCategories/ProductCategories";
import RecommendedProduct from "@/components/recommendedProduct/RecommendedProduct";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <RecommendedProduct />
      <ProductCategories />
    </div>
  );
};

export default Home;
