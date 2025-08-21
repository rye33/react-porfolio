import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div>
        <Link
          onClick={closeMenu}
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          duration={500}
          to="heroSection"
        >
          <img src="./img/logo.svg" alt="Logoipsum" />
        </Link>
      </div>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul class="topnav">
          <li>
            <Link
              onClick={closeMenu}
              spy={true}
              smooth={true}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              <a href="#">
                <i class="bx bxs-home"></i> Home
              </a>
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              spy={true}
              smooth={true}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
              <a href="#">
                <i class="bx bx-code-alt"></i> Skills
              </a>
            </Link>
          </li>

          {/* <li>
            <Link
              onClick={closeMenu}
              
              spy={true}
              smooth={true}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              <a href="#">
                <i class="bx bxs-folder-open"></i> Portfolio
              </a>
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              
              spy={true}
              smooth={true}
              duration={500}
              to="testimonial"
              className="navbar--content"
            >
              <a href="#">
                <i class="bx bxs-chat"></i> Testimonials
              </a>
            </Link>
          </li> */}
          <li>
            <Link
              onClick={closeMenu}
              spy={true}
              smooth={true}
              duration={500}
              to="Contact"
              className="navbar--content"
            >
              <a href="#">
                <i class="bx bxs-send"></i> Contact Me
              </a>
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              spy={true}
              smooth={true}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              <a href="#">
                <i class="bx bxs-user-circle"></i> About Me
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
