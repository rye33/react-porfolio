import CV from "../../data/cv.pdf";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h3 className="section--title">Hi, I'm Ryan</h3>
          <h1 className="hero--section--title">
            Web
            <span className="hero--section-title--color"> Developer</span>
          </h1>
          <p className="hero--section-description">
            Highly motivated and detail-oriented aspiring web developer with a
            strong foundation in HTML, CSS, and JavaScript. Eager to contribute
            to a dynamic team and build user-friendly web experiences. Proven
            ability to create responsive layouts and troubleshoot issues.
            Actively learning new technologies and frameworks to expand
            skillset.
          </p>
          <div className="social-media">
            <a href="//www.linkedin.com" target="_blank">
              <i class="bx bxl-linkedin"></i>
            </a>
            <a href="//www.github.com" target="_blank">
              <i class="bx bxl-github"></i>
            </a>
            <a href="//www.facebook.com" target="_blank">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="//www.instagram.com" target="_blank">
              <i class="bx bxl-instagram"></i>
            </a>
          </div>
          <a href={CV} download>
            <button className="btn btn-primary">
              <i class="bx bx-file"></i> Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
