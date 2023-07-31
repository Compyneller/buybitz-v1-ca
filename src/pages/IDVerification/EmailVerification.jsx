import React from "react";
import { Container } from "react-bootstrap";
import BackBtn from "../../components/BackBtn/BackBtn";

const EmailVerification = () => {
  return (
    <Container className="py-5">
      <BackBtn />
      <br />
      <br />
      <h1 className="fw-semibold">
        The link in my verification email is missing, expired, or invalid
      </h1>
      <br />
      <ul>
        <li>
          If the verification link in your email is missing, expired, or not
          working, it is possible that your email settings or security filter
          are preventing it from being displayed. To resolve the issue, you may
          need to adjust your email settings or security filters.
        </li>
        <br />
        <br />
        <li>
          How to fix it? <br />
          <br />
          To fix these issues, try the following:- <br />
          <br />
          To receive a new verification email from buybitz, you should add
          contact@buybitz.com to your contact list and then sign out of your
          buybitz account before signing in again. If this does not work, you
          can try using a different browser, such as Google Chrome, and clear
          your browser's cookies and cache before signing out and signing back
          into your buybitz account.
        </li>
      </ul>
    </Container>
  );
};

export default EmailVerification;
