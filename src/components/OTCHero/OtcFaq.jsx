import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomAccordion from "../CEX/CustomAccordion";

const data = [
  {
    heading: "What is OTC trading?",
    text: "OTC stands for 'Over-the-Counter,' referring to the purchase and sale of financial instruments, such as stocks, bonds, and derivatives, directly between two parties without the involvement of a formal exchange. It provides a decentralized marketplace for trading, outside of regulated exchanges, offering greater flexibility and accessibility to investors.",
  },
  {
    heading: "What are the limits for OTC trading?",
    text: "We’d like to inform those interested in opening an OTC account with us that our minimum order amount is 100 hundred INR and our maximum order amount is 5 lakh INR. In addition, we require a security deposit from our customers, which can lead to increased transaction limits.",
  },
  {
    heading: "What are the supported pairs for OTC trading?",
    text: "The only supported pairs are USDT/INR.",
  },
  {
    heading: "How do I become eligible for OTC Trading?",
    text: "OTC trading is only available to a selected institutional and individual users. You can find more information below, or contact otc@buybitz.in",
  },
  {
    heading: "How do I register for OTC trading?",
    text: "Selected Institutional and individual users simply need to agree to the Exchange Terms & Conditions to access the OTC Portal.",
  },
];

const OtcFaq = () => {
  return (
    <div className="w-full py-20 bg-[#1E1B36] ">
      <Container>
        <h1 className="text-center font-bold text-white text-[56px] mb-5  ">
          Frequently Asked Questions
        </h1>

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

export default OtcFaq;
