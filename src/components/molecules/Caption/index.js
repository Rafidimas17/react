import React from "react";
import Figure from "react-bootstrap/Figure";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { IconMountain } from "../../../assets";
import { IconHiker } from "../../../assets";
import { IconCities } from "../../../assets";
import "./Caption.scss";
function Caption() {
  return (
    <div className="caption">
      <Figure.Caption className="text">
        Forget Busy Work, Start Next Advanture
      </Figure.Caption>
      <Figure.Caption className="sub-text">
        We provide what you need to enjoy your hiking in Indonesia. Let’s get
        started !
      </Figure.Caption>
      <Button className="btn-show ">Show Me Now</Button>{" "}
      <CardGroup className="card-top">
        <Card className="border-0">
          <Card.Img className="icon" src={IconMountain} />
          <Card.Body>
            <Card.Title className="icon-title">40 Mountain</Card.Title>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img className="icon" src={IconHiker} />
          <Card.Body>
            <Card.Title className="icon-title">1.214 Hiker</Card.Title>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img className="icon" src={IconCities} />
          <Card.Body>
            <Card.Title className="icon-title">20 Cities</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Caption;
