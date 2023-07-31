import React from "react";
import { Container } from "react-bootstrap";
import BackBtn from "../../components/BackBtn/BackBtn";

const Faq = () => {
  return (
    <Container className="py-5">
      <BackBtn />
      <br />
      <br />
      <h1 className="fw-semibold">FAQs</h1>
      <br />
      <ul>
        <li>
          What is identity verification? <br />
          <br />
          Buybitz Identity verification is used by company to comply with KYC
          (Know Your Customer) regulations, which involve identifying and
          confirming that a customer's identity is legitimate. This process
          typically involves multiple steps and is designed to prevent the
          creation and use of fraudulent accounts.
        </li>
        <br />
        <br />
        <li>
          What if I’m having trouble verifying my identity? <br />
          <br />
          When filling out your personal information, it is important to ensure
          that your name matches the name on your official identification
          document, and that the information provided is free of any
          typographical errors. If you have entered accurate information but are
          still unable to pass the verification process, please do not hesitate
          to contact us for further assistance.
        </li>
        <br />
        <br />
        <li>How do I get started with Identity Verification?</li>
        <br />
        <br />
        <li>
          To get started with verification, sign in to your buybitz account and
          go to our verification page{" "}
          <a href="https://buybitz.com" target="_blank" rel="noreferrer">
            (https://buybitz.com)
          </a>
        </li>
        <br />
        <br />
        <li>
          What does buybitz do with my information? <br />
          <br />
          Our company gathers information that is required by law, such as
          complying with anti-money laundering regulations or verifying
          customers' identities to prevent fraud. Additionally, we may collect
          data to provide specific services, enhance our products, and keep you
          informed about updates based on your preferences. We do not share your
          information with third parties for profit without your consent.
        </li>
      </ul>
    </Container>
  );
};

export default Faq;
