import React from "react";
import { Container } from "react-bootstrap";
import BackBtn from "../../components/BackBtn/BackBtn";

const PhotoId = () => {
  return (
    <Container className="py-5">
      <BackBtn />
      <br />
      <br />
      <h1 className="fw-semibold">What type of photo ID can I provide?</h1>
      <br />
      <p>
        As a regulated financial services company, buybitz is required to
        identify users on our platform.As if now Buybitz only accepts the
        persons Aadhaar card. <br />
        <br />
        Important: Please make sure that your document is valid—we cannot accept
        expired IDs.
      </p>
    </Container>
  );
};

export default PhotoId;
