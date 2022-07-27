import Footer from "../../components/Footer";
import HomeHero from "./home-components/HomeHero";
import HomeSection1 from "./home-components/HomeSection1";
import HomeSection2 from "./home-components/HomeSection2";
import HomeSection3 from "./home-components/HomeSection3";
import HomeSection4 from "./home-components/HomeSection4";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <Footer />
    </>
  );
};
export default Home;
