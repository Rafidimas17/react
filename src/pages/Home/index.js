import React from "react";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./home.scss";
import { RegisterBg } from "../../assets";
import { IconMountain } from "../../assets";
import { IconHiker } from "../../assets";
import { IconCities } from "../../assets";

function Home() {
  return (
    <Container className="content">
      <Figure>
        <Figure.Image
          width={524.74}
          height={395.35}
          alt="171x180"
          className="figure"
          src={RegisterBg}
        />
      </Figure>
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
      <div className="most-picked">
        <Button>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Button>
      </div>
    </Container>
  );
}

export default Home;
