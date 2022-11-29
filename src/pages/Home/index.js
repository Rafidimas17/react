import React from "react";
import Container from "react-bootstrap/Container";

import "./home.scss";
import Caption from "../../components/molecules/Caption";
import ContentHero from "../../components/molecules/ContentHero";
import MostPicked from "../../components/molecules/MostPicked";
import landingPage from "../../json/landingPage.json";
function Home() {
  return (
    <Container className="content">
      <ContentHero />
      <Caption />
      <MostPicked data={landingPage.mostPicked} />
    </Container>
  );
}

export default Home;
