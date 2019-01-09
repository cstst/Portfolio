import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";

export default function Nav() {
  return (
    <div className="navigation">
      <Link to="about" smooth={true}>
        About
      </Link>
      <Link to="services" smooth={true}>
        Services
      </Link>
      <Link to="portfolio" smooth={true}>
        Portfolio
      </Link>
      <Link to="contact" smooth={true}>
        Contact
      </Link>
    </div>
  );
}
