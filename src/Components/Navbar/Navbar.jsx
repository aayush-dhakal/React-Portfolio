import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Andrew</div>
        <Toggle />
      </div>

      {/* right  */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                {/* with to attribute the Link will now scroll to the element which has an id of services */}
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
