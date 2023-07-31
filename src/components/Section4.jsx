import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import image from "../assets/v1/Iphone Mockupsfs.png";
const Section4 = () => {
  return (
    <div className=" min-h-[90vh] bg-[#090622] flex items-center flex-col justify-end overflow-hidden relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        className="absolute rotate-[-30deg] top-[67px] right-[20%]">
        <path
          d="M4.3923 0L10.765 9.00137L20.7846 4.3923L11.7832 10.765L16.3923 20.7846L10.0196 11.7832L0 16.3923L9.00137 10.0196L4.3923 0Z"
          fill="white"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        className="absolute top-[147px] rotate-[15deg] ">
        <path
          d="M4.3923 0L10.765 9.00137L20.7846 4.3923L11.7832 10.765L16.3923 20.7846L10.0196 11.7832L0 16.3923L9.00137 10.0196L4.3923 0Z"
          fill="white"
        />
      </svg>
      <div className="bg-[#4700FB] h-full py-10 md:p-0 md:h-[413px]  w-full">
        <Container className=" h-full">
          <Row className="g-4 h-full">
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="flex flex-col justify-center">
              <h1 className="text-[56px] mb-5 text-white font-bold">
                Get In Touch With Us?
              </h1>

              <p className="text-[#ECEBF5] mb-5 text-[16px]">
                Crypto uses blockchain, a decentralized ledger verified by
                computers, for secure transactions without intermediaries like
                banks.
              </p>
              <a href="mailto:contact@buybitz.in">
                <Button className="bg-white border-none text-[#4700FB] rounded-xl px-4 py-3 hover:text-black font-semibold w-fit">
                  Contact Us
                </Button>
              </a>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="flex flex-col justify-center relative">
              <img
                src={image}
                className="w-full h-full md:h-[677px] md:w-[463px]  md:absolute md:bottom-[-150px]"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Section4;
