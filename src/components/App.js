import React from "react";
import Navigation from "./Navigation";
import Landing from "./Landing";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { Provider } from "react-redux";
import store from "../store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <Landing />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </Provider>
  );
}
