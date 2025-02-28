import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import successAnimation from "../../animations/done.json";
import contactUs from "../../animations/contact us.json";

function Contact() {
  // Formspree form
  const [state, handleSubmit] = useForm("mzzzlrvw");

  return (
    <section className="contact" id="contact">
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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input autoComplete="off" type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="textarea">
            <label htmlFor="message">Your Message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send"}
          </button>

          {state.succeeded && <p className="after-submit">
            <Lottie loop={false} className="success-animation" animationData={successAnimation} />
            Your message has been sent successfully
            </p>}
        </form>

        <div className="animation">
          <Lottie
            className="contact-animation"
            animationData={contactUs}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
