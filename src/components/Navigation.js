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

  function handleLinkClick() {
    setIsOpen(false);
    setTimeout(() => hideNav(false), 1100);
  }

  return (
    <Navbar className={`navbar${navHidden ? " hide" : ""}`} expand="md">
      <NavbarToggler onClick={toggleIsOpen}>
        <i class="fas fa-bars" />
      </NavbarToggler>
      <Collapse navbar isOpen={isOpen}>
        <Nav>
          <NavItem>
            <Link to="about" smooth={true} onClick={handleLinkClick}>
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link to="services" smooth={true} onClick={handleLinkClick}>
              Services
            </Link>
          </NavItem>
          <NavItem>
            <Link to="portfolio" smooth={true} onClick={handleLinkClick}>
              Portfolio
            </Link>
          </NavItem>
          <NavItem>
            <Link to="contact" smooth={true} onClick={handleLinkClick}>
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
