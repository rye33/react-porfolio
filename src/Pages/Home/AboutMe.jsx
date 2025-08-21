import { Link } from "react-scroll";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="about--section--content--box ">
        <div className="about--section--content">
          <h1 className="about-section--heading">
            About <span>Me</span>
          </h1>
          <p className="about--section-description">
            Passionate IT professional with 5+ years of experience as
            Information Systems Specialist and 2+ years of experience Data as
            Integrity Officer. Skilled in Oracle Business Intelligence
            Publisher, now known as Oracle Analytics Publisher and ARINC airport
            systems and technologies, with a focus on seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
