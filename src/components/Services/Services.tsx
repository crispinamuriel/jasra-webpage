import React, { useState } from "react";
import "./Services.css";

const SHOW_ALL = "Show All";
const FRONT_END = "Pet Services";
const BACK_END = "Home Services";
const OTHER = "Other";

const Services = () => {
  const [selectedOption, setSelectedOption] = useState(SHOW_ALL);
  const options = [SHOW_ALL, FRONT_END, BACK_END, OTHER];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelectedOption(e.target.value);
  };

  const frontendServices = () => (
    <>
      <a
        href="mailto:jasra.vandekrol@gmail.com?subject=I'd%20like%20Pet%20Grooming!"
        target="_blank"
        rel="noopener noreferrer"
        >
        <img width="100px" src="/groom.png" />
        <p>Pet Grooming</p>
      </a>
      <a
        href="mailto:jasra.vandekrol@gmail.com?subject=I'd%20like%20Pet%20Sitting!"
        target="_blank"
        rel="noopener noreferrer">
        <img width="100px" src="/petsitting.png" />
        <p>Pet Sitting</p>
      </a>
      <a
        href="mailto:jasra.vandekrol@gmail.com?subject=I'd%20like%20Pet%20Boarding!"
        target="_blank"
        rel="noopener noreferrer">
        <img width="95px" src="/boarding.png" />
        <p>Pet Boarding</p>
      </a>
      <a
        href="mailto:jasra.vandekrol@gmail.com?subject=I'd%20like%20Pet%20Training!"
        target="_blank"
        rel="noopener noreferrer">
        <img width="120px" src="/training.png" />
        <p>Pet Training</p>
      </a>
      <a
        href="mailto:jasra.vandekrol@gmail.com?subject=I'd%20like%20Dogwalking!"
        target="_blank"
        rel="noopener noreferrer">
        <img width="100px" src="/walk.png" />
        <p>Dog Walking</p>
      </a>
      <a
        href="mailto:jasra.vandekrol@gmail.com?subject=I'd%20like%20Pet%20Transport!"
        target="_blank"
        rel="noopener noreferrer">
        <img width="100px" src="/transport.png" />
        <p>Pet Transport</p>
      </a>
    </>
  );

  const backendServices = () => (
    <>
      <a
        href="mailto:jasra.vandekrol@gmail.com?subject=I%27d%20like%20house%20sitting!"
        target="_blank"
        rel="noopener noreferrer"
        >
        <img width="100px" src="/house.png" />
        <p>House Sitting</p>
      </a>
      <a
        href="mailto:jasra.vandekrol@gmail.com?subject=I%27d%20like%20plant%20sitting!"
        target="_blank"
        rel="noopener noreferrer">
        <img width="100px" src="/plant.png" />
        <p>Plant Sitting</p>
      </a>
      <a
        href="mailto:jasra.vandekrol@gmail.com?subject=I%27d%20like%20custom%20service!"
        target="_blank"
        rel="noopener noreferrer">
        <img width="90px" src="/custom.png" />
        <p>Custom Service</p>
      </a>
    </>
  );

  const otherServices = () => (
    <>
      <a href="mailto:jasra.vandekrol@gmail.com?subject=I%27d%20like%20Housekeeping%20service!" target="_blank" rel="noopener noreferrer">
        <img width="100px" src="/housekeeping.png" />
        <p>Housekeeping</p>
      </a>
      <a href="mailto:jasra.vandekrol@gmail.com?subject=I%27d%20like%20laundry%20service!" target="_blank" rel="noopener noreferrer">
        <img width="100px" src="/laundry.png" />
        <p>Laundry</p>
      </a>
      <a
        href="mailto:jasra.vandekrol@gmail.com?subject=I%27d%20like%20babysitting%20service!"
        target="_blank"
        rel="noopener noreferrer">
        <img width="100px" src="/babysitting.png" />
        <p>Babysitting</p>
      </a>
      <a
        href="mailto:jasra.vandekrol@gmail.com?subject=I%27d%20like%20custom%20service!"
        target="_blank"
        rel="noopener noreferrer">
        <img width="100px" src="/other.png" />
        <p>Other</p>
      </a>
    </>
  );

  return (
    <div id="services" className="component-container">
      <div className="services-container">
        <h3>Services</h3>
        <select
  onChange={handleChange}
  className="select-services"
  defaultValue={options[0]}
>
  {options.map((option, idx) => (
    <option value={option} key={idx}>
      {option}
    </option>
  ))}
</select>

        <div className="services-icons">
          {(selectedOption === FRONT_END || selectedOption === SHOW_ALL) &&
            frontendServices()}
          {(selectedOption === BACK_END || selectedOption === SHOW_ALL) &&
            backendServices()}
          {(selectedOption === OTHER || selectedOption === SHOW_ALL) &&
            otherServices()}
        </div>
      </div>
    </div>
  );
};

export default Services;
