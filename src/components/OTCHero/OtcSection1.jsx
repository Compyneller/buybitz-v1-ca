import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import f1 from "../../assets/v1/Frame 427322430s.png";
import f2 from "../../assets/v1/Frame 427322430sf.png";
import f3 from "../../assets/3sdfsa.png";
const OtcSection1 = () => {
  return (
    <div className="w-full py-20 bg-[#090622] overflow-hidden">
      <Container>
        <Row className="g-5">
          <Col xs={12} sm={6} md={4} lg={4}>
            <img src={f1} alt="" />
            <h5 className="text-2xl font-semibold text-white my-3">
              Block Trades
            </h5>
            <p className="text-[#DAD8EB]">
              Place large orders with a minimum amount of 100 INR or equivalent
            </p>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <img src={f2} alt="" />
            <h5 className="text-2xl font-semibold text-white my-3">
              Competitive Rates
            </h5>
            <p className="text-[#DAD8EB]">
              Our trading engine provides you with a custom quote instantly and
              securely
            </p>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <img src={f3} alt="" />
            <h5 className="text-2xl font-semibold text-white my-3">
              Fast Settlement
            </h5>
            <p className="text-[#DAD8EB]">
              Execute your trades in seconds without the involvement of a
              third-party
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OtcSection1;
