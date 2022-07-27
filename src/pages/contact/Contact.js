import Footer from "../../components/Footer";
import HomeSection4 from "../home/home-components/HomeSection4";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact-top-cont">
        <h4 className="contact-title">Contact Us</h4>
        <p className="contact-description">
          It is as simple as filling out this form. Don't wait, time is money.
          We will make sure to answer all your questions.
        </p>
      </div>
      <div className="contact-form-cont">
        <form
          className="contact-form"
          action="https://formsubmit.co/your@email.com"
          method="POST"
        >
          <input type="hidden" name="_template" value="table"></input>
          {/*<input type="hidden" name="_next" value="https://domainhere.com"></input>*/}
          <label for="name">Name:</label>
          <input id="name" type="text" name="name" required></input>
          <label for="email">Email:</label>
          <input id="email" type="email" name="email" required></input>
          <label for="message">Message:</label>
          <textarea
            rows="6"
            columns="8"
            id="message"
            type="text"
            name="message"
          ></textarea>
          <button className="btn" type="submit">
            Send
          </button>
        </form>
      </div>
      <HomeSection4 />
      <Footer />
    </>
  );
};
export default Contact;
