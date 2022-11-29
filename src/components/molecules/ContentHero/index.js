import React from "react";
import Figure from "react-bootstrap/Figure";
import { hiking } from "../../../assets";
import "./hero.scss";

function ContentHero() {
  return (
    <div className="container-fluid">
      <Figure>
        <Figure.Image className="figure" alt="171x180" src={hiking} />
        <Figure.Caption></Figure.Caption>
      </Figure>
    </div>
  );
}

export default ContentHero;
