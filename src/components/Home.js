import HeroSection from "./HeroSection";

const Home = () => {
  const data = {
    name: "Shamaya Store",
  };

  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default Home;
