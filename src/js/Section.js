import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";

export default function Secton(props) {
  return (
    <div className="section">
      <Element name={props.element} />
      {props.children}
    </div>
  );
}
