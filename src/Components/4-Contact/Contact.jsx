import "./Contact.css";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section className="contact">
      <h1 className="title">
        <span className="email-icon">
          <MdEmail />
        </span>{" "}
        Contact us
      </h1>
      <p>
        Contact us for more information and get notified when I pushlish
        something new.
      </p>

      <div className="field">
        <form>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" />
          </div>

          <div className="textarea">
            <label htmlFor="message">Your Message:</label>
            <textarea required id="message"></textarea>
          </div>

          <button className="submit">Submit</button>
        </form>

        <div className="border animation">animation</div>
      </div>
    </section>
  );
}

export default Contact;
