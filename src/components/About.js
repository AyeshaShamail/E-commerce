import { useProductsContext } from "../utils/productContext";
import HeroSection from "./HeroSection";

const About = () => {
  const { myName } = useProductsContext();
  const data = {
    name: "Shamaya Store",
  };
  return (
    <>
      <h1>{myName}</h1>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
