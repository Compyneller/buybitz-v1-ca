import React from "react";
import bg from "../assets/v1/Line elements.svg";

import { Col, Container, Row } from "react-bootstrap";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
const Hero = () => {
  return (
    <div className="min-h-screen py-20 pt-32 pb-20 md:pt-0 md:pb-0 w-full flex flex-col justify-center relative z-0 bg-[#090622]">
      <img
        src={bg}
        className="absolute top-0 left-0 right-0 bottom-0 w-full object-cover h-full z-[-1] opacity-30"
        alt=""
      />
      <Container>
        <Row className="g-5">
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className="flex justify-center flex-col">
            <HeroLeft />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className="flex items-center justify-center relative ">
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-[#4800FE] opacity-[0.4000000059604645] blur-[126px]" />
            <HeroRight />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
