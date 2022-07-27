import "./HomeHero.css";
import heroImg1 from "../../../assets/property3.jpg";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <>
      <div className="home-hero-cont">
        <img className="home-hero-img" src={heroImg1} alt=""></img>
        <div className="text-over-hero-img">
          <h1 className="hero-bussiness-name">Vicente Property Management</h1>
          <h3 className="hero-bussiness-service">
            Providing services to the Los Angeles and Orange County area.
          </h3>
          <Link to="/about">
            <h4 className="about-redirect">Why choose Vicente to manage?</h4>
          </Link>
        </div>
      </div>
    </>
  );
};
export default HomeHero;
