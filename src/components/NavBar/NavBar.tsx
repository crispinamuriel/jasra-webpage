import icon from "../../assets/peticon.svg";
import resume from "../../assets/Jasra_Vandekrol_Resume.pdf";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav id="navbar" className="nav">
      <div className="nav-icon">
        <a href="#main" aria-label="Navigate to the beginning of the page">
          <img src={icon} className="ak-icon" alt="A|K icon"></img>
        </a>
      </div>
      <ul className="nav-ul">
        <a
          href="#about"
          className="nav-a"
          aria-label="Navigate to the About section">
          <li>About</li>
        </a>
        <a
          href="#services"
          className="nav-a"
          aria-label="Navigate to the Services section">
          <li>Services</li>
        </a>
        <a
          href={resume}
          className="nav-a"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open resume in new tab">
          <li>Resume</li>
        </a>
        <a
          href="#contact"
          className="nav-a"
          aria-label="Navigate to the Contact section">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;
