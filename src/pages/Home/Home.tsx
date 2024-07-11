import FeaturedProducts from "@/components/featuredProducts/FeaturedProducts";
import HeroSection from "@/components/heroSection/HeroSection";
import ProductCategories from "@/components/productCategories/ProductCategories";
import RecommendedProduct from "@/components/recommendedProduct/RecommendedProduct";
import Testimonials from "@/components/testimonial/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <RecommendedProduct />
      <ProductCategories />
      <FeaturedProducts />
      <Testimonials />
    </div>
  );
};

export default Home;
