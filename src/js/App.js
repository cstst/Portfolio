import React, { useState, useEffect, useRef, Fragment } from "react";
import Navigation from "./Navigation";
import Landing from "./Landing";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function App() {
  return (
    <Fragment>
      <Navigation />
      <Landing />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </Fragment>
  );
}
