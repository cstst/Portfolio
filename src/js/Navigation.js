import React, { useState, useEffect, useRef } from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";

export default function Navigation() {
  const [hideNav, setHideNav] = useState(false);

  function atSectionHead(height, position, numOfSections) {
    for (let i = 0; i <= numOfSections; i++) {
      const aboveOffset = height * i - 75;
      const belowOffset = height * i + 75;
      if (position > aboveOffset && position < belowOffset) {
        return true;
      }
    }
    return false;
  }

  function handleScroll() {
    const scrollPos = window.pageYOffset;
    setTimeout(() => {
      const nextScrollPos = window.pageYOffset;
      if (
        nextScrollPos > scrollPos &&
        !atSectionHead(window.innerHeight, scrollPos, 4)
      ) {
        setHideNav(true);
      } else if (
        nextScrollPos < scrollPos ||
        atSectionHead(window.innerHeight, scrollPos, 4)
      ) {
        setHideNav(false);
      }
    }, 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navigation${hideNav ? " hide" : ""}`}>
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
