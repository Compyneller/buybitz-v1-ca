import { Button, Col, Container, Row } from "react-bootstrap";
import React from "react";
import f1 from "../assets/v1/Frame 427322430.png";
import f2 from "../assets/v1/Frame 427322429.png";
import f3 from "../assets/v1/Frame 4273224302.png";
import f4 from "../assets/v1/Frame 42732243022.png";

const Section1 = () => {
  return (
    <div className="w-full py-20 bg-[#1E1B36] text-white">
      <Container>
        <Row className="g-4">
          <Col
            xs={12}
            sm={12}
            md={5}
            lg={5}
            className="flex flex-col items-between">
            <div className="h-full">
              <h1 className="mb-5 text-5xl font-semibold">
                An Inside Look: How Our System Functions
              </h1>
              <p className="text-[#DAD8EB] text-xl mb-5">
                Explore the inner workings of our system, gaining insights into
                its functionality and underlying processes.
              </p>
              <Button className="w-fit px-[24px] py-[12px] bg-[#4700FB] border-none rounded-xl ">
                Learn More
              </Button>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Row className="g-5">
              <Col xs={12} sm={12} md={6} lg={6}>
                <img src={f1} className="mb-3" alt="" />
                <h5 className="text-2xl font-bold mb-3">
                  Financial stress is at an all-time high
                </h5>
                <p className="text-[#DAD8EB] text-[16px]">
                  Financial stress has reached an unprecedented all-time high,
                  affecting many.
                </p>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <img src={f2} className="mb-3" alt="" />
                <h5 className="text-2xl font-bold mb-3">
                  Limited access to financial advice
                </h5>
                <p className="text-[#DAD8EB] text-[16px]">
                  Restricted financial advice access hinders informed
                  decision-making and financial well-being for individuals.
                </p>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <img src={f3} className="mb-3" alt="" />
                <h5 className="text-2xl font-bold mb-3">
                  Secure and swift: Deposit fiat with ease
                </h5>
                <p className="text-[#DAD8EB] text-[16px]">
                  Enjoy secure and swift fiat deposits, ensuring a seamless and
                  hassle-free transaction experience.
                </p>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <img src={f4} className="mb-3" alt="" />
                <h5 className="text-2xl font-bold mb-3">
                  Explore the Advantages Trade in Crypto
                </h5>
                <p className="text-[#DAD8EB] text-[16px]">
                  Discover the benefits of trading in crypto, unlocking new
                  opportunities and potential for growth.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section1;
