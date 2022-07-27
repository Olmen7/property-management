import "./About.css";
import aboutImg1 from "../../assets/computer-hand-min.jpg";
import HomeSection4 from "../home/home-components/HomeSection4";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <>
      <div className="about-page">
        <div className="about-page-left">
          <h3 className="about-title">About Us</h3>
          <p className="about-description">
            We provide services by licensed professionals so that you know you
            are in safe hands. We know trust is important that is why we want to
            make sure we always come to an understanding. We want to make sure
            your property gets the value it deserves.
          </p>
          <img className="about-img2" src={aboutImg1} alt=""></img>
          <p className="about-description2">
            Your investment is our investment. We want to make sure that
            everything gets accounted for. Why DIY (do it yourself) when we can
            DIFY (do it for you)? No need to complicate yourself with everything
            a property needs. This includes but isn't limited by:
            <ul>
              <li className="about-list">Landlord Tenant Laws</li>
              <li className="about-list">Federal Fair Housing Act</li>
              <li className="about-list">Lease Enforcement</li>
              <li className="about-list">Security Deposit Deposition</li>
              <li className="about-list">Attorney Drafted Detailed Lease</li>
            </ul>
          </p>
          <p className="about-description">
            No need to go through the hassle of managing everything yourself. We
            make sure that everything is taken care of. From tenant screening to
            maintenance. As property owners ourselves, we know all the problems
            that can arise, so we know how to handle them.
          </p>
        </div>
        <div className="about-page-right">
          <img className="about-img1" src={aboutImg1} alt=""></img>
          <p className="about-description3">
            Your investment is our investment. We want to make sure that
            everything gets accounted for. Why DIY (do it yourself) when we can
            DIFY (do it for you)? No need to complicate yourself with everything
            a property needs. This includes but isn't limited by:
            <ul>
              <li className="about-list">Landlord Tenant Laws</li>
              <li className="about-list">Federal Fair Housing Act</li>
              <li className="about-list">Lease Enforcement</li>
              <li className="about-list">Security Deposit Deposition</li>
              <li className="about-list">Attorney Drafted Detailed Lease</li>
            </ul>
          </p>
        </div>
        <HomeSection4 />
        <Footer />
      </div>
    </>
  );
};
export default About;
