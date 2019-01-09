import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";

export default function Secton({ element, scrollButtonTo, children, toTop }) {
  return (
    <div className="section">
      <Element name={element} />
      {children}
      <Link className="scroll-link" to={scrollButtonTo} smooth={true}>
        <i className={`fas fa-chevron-${toTop ? "up" : "down"}`} />
      </Link>
    </div>
  );
}
