import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { connect } from "react-redux";
import { hideNav } from "../actions";

function Navigation({ hideNav, navHidden }) {
  function delayShowNav() {
    setTimeout(() => hideNav(false), 1100);
  }

  function handleScroll() {
    const scrollPos = window.pageYOffset;
    setTimeout(() => {
      const nextScrollPos = window.pageYOffset;
      if (nextScrollPos > scrollPos) {
        hideNav(true);
      } else if (nextScrollPos < scrollPos) {
        hideNav(false);
      }
    }, 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navigation${navHidden ? " hide" : ""}`}>
      <Link to="about" smooth={true} onClick={delayShowNav}>
        About
      </Link>
      <Link to="services" smooth={true} onClick={delayShowNav}>
        Services
      </Link>
      <Link to="portfolio" smooth={true} onClick={delayShowNav}>
        Portfolio
      </Link>
      <Link to="contact" smooth={true} onClick={delayShowNav}>
        Contact
      </Link>
    </div>
  );
}

const mapStateToProps = state => ({
  navHidden: state.navHidden
});

export default connect(
  mapStateToProps,
  { hideNav }
)(Navigation);
