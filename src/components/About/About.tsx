import "./About.css";

const About = () => {
  return (
    <div id="about" className="component-container">
      <div className="about-container">
        <h3>About</h3>
        <section className="about-info">
          <div className="about-text">
            <h4>
              {" "}
              Hi, I'm Jasra{" "}
              <span role="img" aria-label="wave emoji">
                👋
              </span>
            </h4>
            <p>I provide pet care at your home or my place. I take care of your pets in the comfort of their own home, minimizing any disruption to their routine, or I offer boarding at our space in Vancouver, where your pet will receive the same level of attention and care as if they were in their own home. In both cases, we keep our clients constantly updated.</p>
            <p>
              <a href="#contact">Contact me</a> if you have any questions or
              want to chat!
            </p>
          </div>
          <div className="contact-buttons-container">
            <a
              href="mailto:jasra@email.com"
              className="contact-buttons">
              Email
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-buttons">
              LinkedIn
            </a>
            <a
              href={'www.google.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-buttons">
              Resume
            </a>
            <a
              href="https://blah-blah-blog.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-buttons">
              Blog
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
