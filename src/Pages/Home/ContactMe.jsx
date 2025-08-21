import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_puhsvb6", "template_nvi6gpo", form.current, {
        publicKey: "gpcnXw_Gjh1JLHP4p",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="contact--section--box">
        <h1 className="contact--section--header">
          Contact <span>Me</span>
        </h1>
        <br />
        <h3>Get In Touch</h3>
        <br />
        <p>
          I'm currently available to take on new projects, so feel free to send
          me a message about anything that you want me to work on. You can
          contact me anytime.
        </p>
        <br />
        <div className="contact--img">
          <a>
            <i class="bx bxs-phone"></i> 09065770413
          </a>
          <a>
            <i class="bx bxs-envelope"></i> staiglesiaryan@gmail.com
          </a>
          <a>
            <i class="bx bxs-map"></i> Baybay City Leyte
          </a>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact--form--container"
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            First Name
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            Last Name
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            Email
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            Phone-number
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="subject" className="contact--label">
          Subject
          <input
            type="subject"
            className="contact--input text-md"
            name="subject"
            id="subject"
            placeholder="Email Subject..."
            required
          />
        </label>
        <label htmlFor="message" className="contact--label">
          Message
          <textarea
            name="message"
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />I
          accept the terms
        </label>
        <div className="contact--btn">
          <button className="btn btn-primary">
            <i class="bx bx-send"></i> Send Message
          </button>
        </div>
      </form>
    </section>
  );
};
