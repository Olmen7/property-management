import "./HomeSection4.css";

const HomeSection4 = () => {
  return (
    <>
      <div className="home-section4-container">
        <div className="phone">
          <h4>Get in Touch:</h4>
          <p className="number">
            Office:
            <a href="tel:000.000.0000"> 000.000.0000</a>
          </p>
        </div>
        <div className="extra-container">
          <h4>Cities that we manage:</h4>
          <span className="cities">
            Long Beach | Anaheim | Cerritos | Santa Ana | Glendale | Riverside |
            Paramount | Lakewood | Signal Hill | Bellflower | Seal Beach
          </span>
        </div>
      </div>
    </>
  );
};
export default HomeSection4;
