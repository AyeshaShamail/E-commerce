import HeroSection from "./HeroSection";
import RecommendedProducts from "./RecommendedProducts";

const Home = () => {
  const data = {
    name: "Shamaya Store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <RecommendedProducts />
    </>
  );
};

export default Home;
