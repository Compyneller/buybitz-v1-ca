import React from "react";
import { Container } from "react-bootstrap";
import menu from "../../assets/icons/Menu.png";
import pancard from "../../assets/icons/Pancard.png";
import verify from "../../assets/icons/Verify.png";
import BackBtn from "../../components/BackBtn/BackBtn";
const PanVerification = () => {
  return (
    <Container className="py-5">
      <BackBtn />
      <br />
      <br />
      <h1 className="fw-semibold">Pan Card Verification</h1>
      <br />
      <h5 className="fw-semibold">For Website</h5>
      <br />
      <ol>
        <li>
          Migrate to pancard section on the dashboard by going to the bottom
          left corner of the screen.
        </li>
        <li>
          Input your PAN card number, making sure that it matches your username.
        </li>
        <li>
          Click on the <img className="my-2" src={verify} height={30} alt="" />{" "}
          button to initiate the verification process.
        </li>
        <li>Once the process is completed, your PAN card will be verified</li>
      </ol>
      <br />
      <h5 className="fw-semibold">For APP</h5>
      <br />
      <p>
        To access the PAN CARD section in the app, please follow these steps:
      </p>
      <ol>
        <li>
          Migrate to menu button{" "}
          <img className="my-2" src={menu} height={50} alt="" /> located in the
          top left corner of the screen.
        </li>

        <li>
          Click on the <img className="my-2" src={pancard} height={40} alt="" />{" "}
          section within the menu.
        </li>
        <li>
          Input your PAN card number, making sure that it matches your username.
        </li>
        <li>
          Click on the <img className="my-2" src={verify} height={30} alt="" />{" "}
          button to initiate the verification process.
        </li>
        <li>Once the process is completed, your PAN card will be verified</li>
      </ol>
    </Container>
  );
};

export default PanVerification;
