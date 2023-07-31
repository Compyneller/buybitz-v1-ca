import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const HeroLeft = () => {
  return (
    <>
      <div className="px-[24px] py-[12px] rounded-[12px] border-[1px] text-white mb-5 border-white bg-[#dad8eb1a] w-fit">
        <p>Crypto Exchange</p>
      </div>
      <h1 className="text-[45px] md:text-[62px] font-bold text-white">
        Invest in Crypto with Confidence at True Cost
      </h1>
      <p className="text-[#DAD8EB] text-xl mt-5">
        Buy Bitcoin at its actual best cost using the most competitive exchange
        rates with access to the deepest liquidity available in INR market.
      </p>
      <Row className="g-3 mt-5">
        <Col xs={8} sm={8} md={5} lg={5}>
          <input
            type="text"
            placeholder="Enter your phone number"
            className=" px-[24px] py-[12px] rounded-[12px] border-[1px] text-white border-white bg-[#dad8eb1a] w-full"
          />
        </Col>
        <Col xs={4} sm={4} md={3} lg={3}>
          <Button className="bg-[#4700FB] border-0 rounded-xl w-full h-full">
            Get Started
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default HeroLeft;
