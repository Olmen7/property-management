import "./HomeSection2.css";
import HomeSection2img from "../../../assets/property2.jpg";

const HomeSection2 = () => {
  return (
    <>
      <div className="home-section2-container">
        <h2 className="section2-intro-title">
          Is it worth to invest in the Long Beach and surrounding areas?
        </h2>
        <h3 className="section2-intro-answer">
          Long Beach boasts one of the most in demand residential and commercial
          properties. With this in mind knowing that your property is getting
          the most value should be your priority. Why manage it yourself when we
          offer the services you need to get the most value with less of a
          hassle.
        </h3>
        <hr></hr>
        <img className="home-section2-img" src={HomeSection2img} alt=""></img>
      </div>
      <h4 className="section2-service-title">Services we Provide</h4>
      <div className="section2-services-container">
        <div className="section2-services">
          <ul className="yes">
            <li className="section2-service-item">Property Marketing</li>
            <p className="section2-service-item-p">
              We know how scary it is to think about having a property be
              vacant.We make sure that your property gets filled instead of
              remaining vacant for too long.
            </p>
          </ul>
        </div>
        <div className="section2-services">
          <ul>
            <li className="section2-service-item">Property Maintenance</li>
            <p className="section2-service-item-p">
              Your property deserves to be well kept, we will make sure that
              everything is taken care of so you don't have to worry about the
              state of it. We contact trusted handymen to take care of
              everything that is needed.
            </p>
          </ul>
        </div>
        <div className="section2-services">
          <ul className="yes">
            <li className="section2-service-item">Tenant Screening</li>
            <p className="section2-service-item-p">
              Making sure your property isn't empty is important but having it
              filled by just anyone can be scary as well. That is why we make
              sure to look for tenants that will be responsible and take care of
              the unit.
            </p>
          </ul>
        </div>
        <div className="section2-services">
          <ul>
            <li className="section2-service-item">Rent Collection</li>
            <p className="section2-service-item-p">
              With Vicente Property Management we assure you that your rent will
              be paid on a regular basis. We strive to make sure that you get
              your rent as early as possible each month.
            </p>
          </ul>
        </div>
      </div>
    </>
  );
};
export default HomeSection2;
