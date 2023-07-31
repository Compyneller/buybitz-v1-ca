import React from "react";
import bg from "../assets/v1/Line elements.svg";

import { Col, Container, Row } from "react-bootstrap";
import f1 from "../assets/v1/Frame 427322597.png";
import f2 from "../assets/v1/Frame 42732259721.png";
import f3 from "../assets/v1/Frame 427322597 (1).png";
import tick from "../assets/v1/Frame 427322417.png";
const Section2 = () => {
  return (
    <div className="min-h-screen py-20 md:py-0 text-white w-full flex flex-col justify-center relative z-0 bg-[#090622] overflow-hidden">
      <img
        src={bg}
        className="absolute top-0 left-0 right-0 bottom-0 w-full object-cover h-full z-[-1] opacity-30"
        alt=""
      />
      <Container>
        <Row className="g-4 mb-5">
          <Col xs={12} sm={12} md={7} lg={8}>
            <h1 className="text-[56px] font-semibold">Why Buybitz?</h1>
          </Col>
          <Col xs={12} sm={12} md={7} lg={4}>
            <p className="text-[#DAD8EB] text-xl">
              We employ state-of-the-art security measures to protect your
              assets and personal information.
            </p>
          </Col>
        </Row>
        <Row className="g-5">
          <Col xs={12} sm={6} md={4} lg={4} className="relative">
            <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-[#4800FE] opacity-[0.4000000059604645] blur-[126px]" />
            <img src={f1} className="mb-3" alt="" />
            <h5 className="text-[28px] font-semibold mb-3">Ease Of Trading</h5>
            <div className="flex gap-3 items-center mb-3">
              <img src={tick} alt="" />
              <p>Intuitive interface</p>
            </div>
            <div className="flex gap-3 items-center mb-3">
              <img src={tick} alt="" />
              <p>24*7 Fiat deposits</p>
            </div>
            <div className="flex gap-3 items-center mb-3">
              <img src={tick} alt="" />
              <p>24*7 Withdrawals directly to your bank.</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <img src={f2} className="mb-3" alt="" />
            <h5 className="text-[28px] font-semibold mb-3">
              Institutional-Grade Security
            </h5>
            <div className="flex gap-3 items-center mb-3">
              <img src={tick} alt="" />
              <p>95% of assets are stored safely offline</p>
            </div>
            <div className="flex gap-3 items-center mb-3">
              <img src={tick} alt="" />
              <p>Secured with BitGO</p>
            </div>
            <div className="flex gap-3 items-center mb-3">
              <img src={tick} alt="" />
              <p>Whitelisting and transaction confirmations</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <img src={f3} className="mb-3" alt="" />
            <h5 className="text-[28px] font-semibold mb-3">
              Proven Reliability
            </h5>
            <div className="flex gap-3 items-center mb-3">
              <img src={tick} alt="" />
              <p>Serving customers 24*7</p>
            </div>
            <div className="flex gap-3 items-center mb-3">
              <img src={tick} alt="" />
              <p>Buy Bitcoin at true cost</p>
            </div>
            <div className="flex gap-3 items-center mb-3">
              <img src={tick} alt="" />
              <p>24*7 customer support</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section2;
