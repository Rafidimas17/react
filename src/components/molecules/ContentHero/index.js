import React from "react";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import { RegisterBg } from "../../../assets";
import "./hero.scss";

function ContentHero() {
  return (
    <div className="container-fluid">
      <Figure>
        <Figure.Image
          width={500}
          height={400}
          className="figure"
          alt="171x180"
          src={RegisterBg}
        />
        <Figure.Caption></Figure.Caption>
      </Figure>
    </div>
  );
}

export default ContentHero;
