import "./HomeSection3.css";
import { Link } from "react-router-dom";

const HomeSection3 = () => {
  return (
    <>
      <div className="home-section3-container">
        <h4 className="first-step">Take the First Step</h4>
        <p className="why-wait">
          Why wait when time is money? If you have any question go ahead and
          contact us{" "}
          <Link className="home-section3-link" to="/contact">
            HERE
          </Link>
        </p>
      </div>
    </>
  );
};
export default HomeSection3;
