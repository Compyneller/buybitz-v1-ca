import React from "react";
import { Container } from "react-bootstrap";

import BackBtn from "../../components/BackBtn/BackBtn";
import CreateAccountComp from "../../components/CreateAccountComp";
const BankAccount = () => {
  return (
    <Container className="py-5">
      <BackBtn />
      <br />
      <br />
      <h1 className="fw-semibold">How to Create Account?</h1>
      <br />
      <CreateAccountComp />
    </Container>
  );
};

export default BankAccount;
