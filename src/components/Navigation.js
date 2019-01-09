import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { connect } from "react-redux";
import { hideNav } from "../actions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavLink,
  NavItem
} from "reactstrap";

function Navigation({ hideNav, navHidden }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleScroll() {
    const scrollPos = window.pageYOffset;
    setTimeout(() => {
      const nextScrollPos = window.pageYOffset;
      if (nextScrollPos > scrollPos) {
        hideNav(true);
        setIsOpen(false);
      } else if (nextScrollPos < scrollPos) {
        hideNav(false);
      }
    }, 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  function delayShowNav() {
    setTimeout(() => hideNav(false), 1100);
  }

  return (
    <Navbar
      className={`navbar${navHidden ? " hide" : ""}`}
      fixed="top"
      expand="md"
    >
      <NavbarToggler onClick={toggleIsOpen} />
      <Collapse navbar isOpen={isOpen}>
        <Nav>
          <NavItem>
            <Link to="about" smooth={true} onClick={delayShowNav}>
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link to="services" smooth={true} onClick={delayShowNav}>
              Services
            </Link>
          </NavItem>
          <NavItem>
            <Link to="portfolio" smooth={true} onClick={delayShowNav}>
              Portfolio
            </Link>
          </NavItem>
          <NavItem>
            <Link to="contact" smooth={true} onClick={delayShowNav}>
              Contact
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

const mapStateToProps = state => ({
  navHidden: state.navHidden
});

export default connect(
  mapStateToProps,
  { hideNav }
)(Navigation);
