import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomAccordion from "./CustomAccordion";

const data = [
  {
    heading: "Transparent Pricing",
    text: "Buybitz.com offers true cost pricing with zero fees, ensuring that you pay only the real market price of the cryptocurrency.",
  },
  {
    heading: "Wide range of cryptocurrencies",
    text: "With buybitz.com, you can buy and sell a wide range of digital currencies, including Bitcoin, Ethereum, and Chain Link.",
  },
  {
    heading: "Secure and user friendly",
    text: "Friendly platform: Buybitz.com provides a highly secure and user-friendly platform that ensures that your transactions are safe and easy to execute.",
  },
  {
    heading: "Quick orders",
    text: "Instead of market orders, buybitz.com offers quick orders that allow you to buy or sell cryptocurrencies at a specific fixed price.",
  },
  {
    heading: "Buybitz v/s Competitor's market fees structure",
    text: "Buybitz has the lowest transaction fee rate amongst all major trading platforms.",
    body: true,
  },
];
const CEX = () => {
  return (
    <div className="w-full py-20 bg-[#1E1B36] ">
      <Container>
        <h1 className="text-center font-bold text-white text-[56px] mb-3  ">
          Transparent CEX Model
        </h1>
        <p className=" text-center mb-5 text-[16px] text-[#DAD8EB]">
          Crypto uses blockchain, a decentralized ledger verified by computers,
          for secure transactions without intermediaries like banks.
        </p>

        <Row className="g-3 flex justify-center">
          {data?.map((items, index) => (
            <Col xs={12} sm={12} md={10} lg={8} key={index}>
              <CustomAccordion
                heading={items.heading}
                text={items.text}
                body={items.body}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CEX;
