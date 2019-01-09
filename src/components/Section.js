import React from "react";
import { Link, Element } from "react-scroll";
import { connect } from "react-redux";
import { hideNav } from "../actions";

function Secton({ element, scrollButtonTo, children, toTop, hideNav }) {
  function delayShowNav() {
    setTimeout(() => hideNav(false), 1100);
  }

  return (
    <div className="section">
      <Element name={element} />
      {children}
      <Link
        className="scroll-link"
        to={scrollButtonTo}
        smooth={true}
        onClick={delayShowNav}
      >
        <i className={`fas fa-chevron-${toTop ? "up" : "down"}`} />
      </Link>
    </div>
  );
}

export default connect(
  null,
  { hideNav }
)(Secton);
