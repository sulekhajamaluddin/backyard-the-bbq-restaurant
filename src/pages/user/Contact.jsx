//Project Files
import Form from "../../components/user/ContactForm";
import Map from "../../components/user/Map";
import owner from "../../assets/owner-desktop.jpg";
import ownerMobile from "../../assets/owner-mobile.jpg";

export default function Contact() {
  return (
    <div className="contact">
      <picture>
        <source className="owner" media="(min-width:750px)" srcSet={owner} />
        <img className="owner" src={ownerMobile} alt="The owner" />
      </picture>
      <div className="details flex-column-center">
        <h1>Contact Us</h1>
        <section className="working-hours flex-column-center">
          <h2>Hours of business</h2>
          <p>
            <span>Monday to Saturday:</span>
            <span>10:00 to 22:00</span>{" "}
          </p>
          <p>
            <span>Sunday:</span>
            <span>10:00 to 18:00</span>{" "}
          </p>
        </section>
        <h2>Book a table</h2>
        <Form />
        <section className="address flex-column-center">
          <h2>Our location</h2>
          <p>Level-1, Solna Centrum, Solna</p>
          <p>Stockholm</p>
        </section>
        <Map className="map" />
      </div>
    </div>
  );
}
