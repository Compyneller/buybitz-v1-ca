import React from "react";
import { Container } from "react-bootstrap";
import kyc from "../../assets/icons/KYC.png";
import startkyc from "../../assets/icons/Start KYC Verification.png";
import next from "../../assets/icons/Next.png";
import continuegreen from "../../assets/icons/Continue (Green).png";
import allow from "../../assets/icons/Allow.png";
import verify from "../../assets/icons/Verified Identity (KYC).png";
import menu from "../../assets/icons/Menu.png";
import BackBtn from "../../components/BackBtn/BackBtn";
const KYCVerification = () => {
  return (
    <Container className="py-5">
      <BackBtn />
      <br />
      <br />
      <h3 className="fw-semibold">KYC Verification</h3>
      <br />
      <h5 className="fw-semibold">For Website</h5>
      <br />
      <p>
        To complete the KYC verification process for dashboard , please follow
        the steps below:
      </p>
      <br />
      <ol>
        <li>
          To initiate the process, click on the{" "}
          <img src={kyc} width={120} alt="" /> button located at the bottom left
          corner of your screen.
        </li>
        <li>
          Check the provided information, and then click on the{" "}
          <img src={startkyc} width={250} alt="" /> button.
        </li>
        <li>
          You will be redirected to the Digilocker page, where you need to enter
          your Aadhar card number and security tax details.
        </li>
        <li>
          After entering the required information, click on the{" "}
          <img src={next} width={250} alt="" /> button.
        </li>
        <li>You will receive an OTP on your registered mobile number.</li>
        <li>Enter the received OTP to link it with your KYC verification.</li>
        <li>
          Click on the <img src={continuegreen} width={250} alt="" /> button.
        </li>
        <br />
        <li>
          Click on <img src={allow} width={100} alt="" /> to share your
          Digilocker account with Signzy.
        </li>
        <li>
          Once you have completed all the steps above, your KYC verification
          will be successfully completed.
        </li>
      </ol>
      <br />
      <h5 className="fw-semibold">For App</h5>
      <br />
      <p>
        To verify your identity through the app, please follow the steps below:
      </p>
      <br />

      <ol>
        <li>
          Go to the menu <img src={menu} width={50} alt="" /> tab located on the
          top left corner of your screen.
        </li>
        <br />
        <li>
          Click on the <img src={verify} width={200} alt="" /> option, which is
          also known as the KYC Verification option.
        </li>
        <li>
          Check the provided information, and then click on the{" "}
          <img src={startkyc} width={250} alt="" /> button.
        </li>
        <li>
          You will be redirected to the Digilocker page, where you need to enter
          your Aadhar card number and security tax details.
        </li>
        <li>
          After entering the required information, click on the{" "}
          <img src={next} width={250} alt="" /> button.
        </li>
        <li>You will receive an OTP on your registered mobile number.</li>
        <li>Enter the received OTP to link it with your KYC verification.</li>
        <li>
          Click on the <img src={continuegreen} width={250} alt="" /> button.
        </li>
        <br />
        <li>
          Click on <img src={allow} width={100} alt="" /> to share your
          Digilocker account with Signzy.
        </li>
        <li>
          Once you have completed all the steps above, your KYC verification
          will be successfully completed.
        </li>
      </ol>
    </Container>
  );
};

export default KYCVerification;
