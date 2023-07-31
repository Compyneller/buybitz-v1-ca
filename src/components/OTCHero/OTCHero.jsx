import React from "react";
import bg from "../../assets/v1/Line elements.svg";
import first from "../../assets/2.png";
import second from "../../assets/3.png";
import { Button, Col, Container, Row } from "react-bootstrap";

const OTCHero = () => {
  return (
    <div className="min-h-screen py-20 pt-32 pb-20 md:pt-0 md:pb-0 w-full flex flex-col justify-center relative z-0 bg-[#090622] overflow-hidden">
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
            md={4}
            lg={4}
            className="flex items-end justify-center md:justify-start">
            <img src={first} className="h-[200px] md:h-fit" alt="" />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className="flex flex-col justify-center items-center">
            <div className="px-[24px] py-[12px] rounded-[12px] border-[1px] text-white mb-4 border-white bg-[#dad8eb1a] w-fit">
              <p>Crypto Exchange</p>
            </div>
            <h1 className="text-[45px] md:text-[62px] font-bold text-white">
              OTC Portal
            </h1>
            <p className="text-[#DAD8EB] text-xl my-4">
              Trade in large blocks and withdraw USDT
            </p>
            <a
              href="https://forms.zohopublic.in/otc/form/OTCTraders/formperma/uQNieHz9fLp4bOiIVZ2mD0KQcNUDy5csN260taTKR90"
              target="_blank">
              <Button className="bg-[#4700FB] border-0 rounded-xl py-3 px-4">
                Open OTC Account
              </Button>
            </a>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className="flex justify-center items-start py-5">
            <img src={second} className="h-[200px] md:h-fit" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OTCHero;
