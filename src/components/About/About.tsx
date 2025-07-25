import resume from "../../assets/Jasra_Vandekrol_Resume.pdf";
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
            <p>I have strived to aid, comfort, and build trust with animals since the day I was born. There hasn't been a time when I haven't had a dog, and cats have always been my favorite! As soon as I met the age requirement for a local shelter, I immediately sent in a request to volunteer and got accepted. I spent hundreds of hours caring for cats and dogs and loved every second of it, creating an ambition to seek out new ways to pursue my passion. I'm eager and excited to create a happy and trusting relationship with your pets!</p>
            <p>
              <a href="#contact">Contact me</a> if you have any questions or
              want to chat.
            </p>
          </div>
          <div className="contact-buttons-container">
            <a
              href="mailto:jasra.vandekrol@gmail.com"
              className="contact-buttons">
              Email
            </a>
            <a
              href="https://www.rover.com/members/jasra-v"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-buttons">
              Rover
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-buttons">
              Resume
            </a>
            <a
              href="https://www.rover.com/members/jasra-v-certified-pet-sitter-and-dog-walker/contact/?slug=jasra-v-certified-pet-sitter-and-dog-walker&service=drop-in&bep=event%3Drecord-event%26event_name%3DCSC%2B-%2Bnot%2Blogged%2Bin&service_type=drop-in&frequency=onetime&pet_type=dog&bep=event%3Daccount-sign-up-google-success&bep=signup_method%3Dgoogle%26person_opk%3DgDDxxaag%26account_zip%3D97204%26event%3Dsign_up"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-buttons">
              Contact using Rover
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
