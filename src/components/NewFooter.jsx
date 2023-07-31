import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import arrow from "../assets/Frame.png";
import { BsMedium, BsTwitter, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const NewFooter = () => {
  return (
    <footer className="w-full py-20 bg-[#090622] ">
      <Container>
        <Row className="g-3">
          <Col xs={6} sm={6} md={3} lg={3}>
            <h5 className="text-2xl mb-5 text-white font-semibold">
              Useful Links
            </h5>
            <div className="text-[16px] flex flex-col gap-2">
              {" "}
              <Link
                className="text-[#DAD8EB]"
                onClick={() => window.scroll(0, 0)}
                to="/about">
                About Us
              </Link>
              <Link
                to="/career"
                className="text-light"
                onClick={() => window.scroll(0, 0)}>
                Career
              </Link>
              <Link
                className="text-[#DAD8EB]"
                onClick={() => window.scroll(0, 0)}
                to="/team">
                Building Buybitz
              </Link>
              <Link
                className="text-[#DAD8EB]"
                onClick={() => window.scroll(0, 0)}
                to="/privacy">
                Privacy
              </Link>
              <Link
                className="text-[#DAD8EB]"
                onClick={() => window.scroll(0, 0)}
                to="/cookies">
                Cookies
              </Link>{" "}
              <Link
                className="text-[#DAD8EB]"
                onClick={() => window.scroll(0, 0)}
                to="/tc">
                User Agreement
              </Link>
              <Link
                className="text-[#DAD8EB]"
                onClick={() => window.scroll(0, 0)}
                to="/terms-conditions">
                Terms and Conditions
              </Link>
              <Link
                className="text-[#DAD8EB]"
                onClick={() => window.scroll(0, 0)}
                to="/terms-policy">
                OTC Terms and Policy
              </Link>
              <Link
                className="text-[#DAD8EB]"
                onClick={() => window.scroll(0, 0)}
                to="https://cointelegraph.com/"
                target="_blank">
                News
              </Link>{" "}
              <Link
                className="text-[#DAD8EB]"
                onClick={() => window.scroll(0, 0)}
                to="/fees">
                Fees
              </Link>
              <Link
                className="text-[#DAD8EB]"
                onClick={() => window.scroll(0, 0)}
                to="/risk">
                Risk Disclosure
              </Link>
              <Link
                className="text-[#DAD8EB]"
                onClick={() => window.scroll(0, 0)}
                to="/law">
                Law Enforcement Requests
              </Link>
              <a className="text-[#DAD8EB]" href="mailto:media@buybitz.in">
                Media Collaboration
              </a>
              <a className="text-[#DAD8EB]" href="mailto:business@buybitz.in">
                Let’s Collaborate
              </a>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
            <h5 className="text-2xl mb-5 text-white font-semibold">
              Our Products
            </h5>
            <div className="text-[16px] flex flex-col gap-2">
              {" "}
              <Link
                className="text-[#DAD8EB]"
                to="/otc"
                onClick={() => window.scroll(0, 0)}>
                OTC
              </Link>
              <Link
                className="text-[#DAD8EB]"
                to="https://play.google.com/store/apps/details?id=com.fireblocks.buybitz&hl=en_IN&gl=US"
                target="_blank"
                onClick={() => window.scroll(0, 0)}>
                Android App
              </Link>
              <Link
                className="text-[#DAD8EB]"
                to="https://apps.apple.com/in/app/buybitz-fire-blocks-pvt-ltd/id1671975411"
                target="_blank"
                onClick={() => window.scroll(0, 0)}>
                iOS App
              </Link>
              <Link
                className="text-[#DAD8EB]"
                to="/otc"
                onClick={() => window.scroll(0, 0)}>
                Web Platform
              </Link>{" "}
              <Link
                className="text-[#DAD8EB]"
                to="/prices"
                onClick={() => window.scroll(0, 0)}>
                Prices
              </Link>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
            <h5 className="text-2xl mb-5 text-white font-semibold">Support</h5>
            <div className="flex flex-col gap-2">
              <a
                className="text-[#DAD8EB]"
                href="mailto:contact@buybitz.in"
                onClick={() => window.scroll(0, 0)}>
                Contact Us
              </a>

              <Link
                className="text-[#DAD8EB]"
                to="/help"
                onClick={() => window.scroll(0, 0)}>
                Help Center
              </Link>
              <Link
                className="text-[#DAD8EB]"
                to="/how-to-create-account"
                onClick={() => window.scroll(0, 0)}>
                Create Account
              </Link>
              <Link
                className="text-[#DAD8EB]"
                to="/manage-my-account"
                onClick={() => window.scroll(0, 0)}>
                ID Verification
              </Link>
              <Link
                className="text-[#DAD8EB]"
                to="/kyc-verification"
                onClick={() => window.scroll(0, 0)}>
                KYC Verification
              </Link>
              <Link
                className="text-[#DAD8EB]"
                to="/how-to-withdraw-fiat"
                onClick={() => window.scroll(0, 0)}>
                How to withdraw Fiat?
              </Link>
              <Link
                className="text-[#DAD8EB]"
                to="/how-to-deposit"
                onClick={() => window.scroll(0, 0)}>
                How to deposit Fiat?{" "}
              </Link>
              <Link
                className="text-[#DAD8EB]"
                to="/crypto-safety-guideline"
                onClick={() => window.scroll(0, 0)}>
                Crypto Safety Guideline
              </Link>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
            <h5 className="text-2xl mb-5 text-white font-semibold">Enquiry</h5>

            <div className="flex flex-col gap-2">
              <Link
                className="text-[#DAD8EB]"
                to="mailto:contact@buybitz.in"
                onClick={() => window.scroll(0, 0)}>
                contact@buybitz.in
              </Link>

              <Link
                className="text-[#DAD8EB]"
                to="mailto:otc@buybitz.in"
                onClick={() => window.scroll(0, 0)}>
                otc@buybitz.in
              </Link>

              <Link
                className="text-[#DAD8EB]"
                to="mailto:legal@buybitz.in"
                onClick={() => window.scroll(0, 0)}>
                legal@buybitz.in
              </Link>

              <Link
                className="text-[#DAD8EB]"
                to="mailto:support@buybitz.in"
                onClick={() => window.scroll(0, 0)}>
                support@buybitz.in
              </Link>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <div
                    className="d-flex justify-content-center justify-content-lg-start "
                    style={{ gap: "1rem" }}>
                    <a
                      href="https://www.instagram.com/buybitz_app/"
                      target="_blank">
                      <AiFillInstagram size={24} color="#ffff" />
                    </a>
                    <a
                      href="https://www.youtube.com/@Buybitz108/featured"
                      target="_blank">
                      <BsYoutube size={24} color="#ffff" />
                    </a>
                    <a href="https://twitter.com/Buybitz_" target="_blank">
                      <BsTwitter size={24} color="#ffff" />
                    </a>
                    <a
                      href="https://medium.com/@buybitz/buybitz-is-a-company-that-offers-its-clients-access-to-the-world-of-bitcoin-a6329da928e8"
                      target="_blank">
                      <BsMedium size={24} color="#ffff" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="my-5 w-full h-[1px] bg-white" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1170"
          height="330"
          viewBox="0 0 1170 330"
          fill="none"
          className="w-full">
          <path
            d="M0 246.845V4.58333H103.391C153.408 4.58333 183.619 30.119 183.619 71.6964C183.619 97.5595 171.534 116.548 149.044 126.042C173.549 133.899 186.64 152.56 186.64 180.06C186.64 222.946 157.1 246.845 103.391 246.845H0ZM97.684 51.0714H54.3808V103.78H97.684C117.154 103.78 127.896 94.2857 127.896 76.9345C127.896 59.9107 117.489 51.0714 97.684 51.0714ZM100.369 148.304H54.3808V200.357H100.369C120.511 200.357 130.917 191.518 130.917 173.512C130.917 157.143 120.175 148.304 100.369 148.304Z"
            fill="white"
          />
          <path
            d="M328.312 83.1548H380.007V246.845H331.333L327.976 228.512C317.57 241.935 296.758 251.101 276.617 251.101C238.349 251.101 214.851 226.22 214.851 185.952V83.1548H266.546V167.619C266.546 194.464 275.945 206.25 297.093 206.25C319.249 206.25 328.312 195.119 328.312 168.274V83.1548Z"
            fill="white"
          />
          <path
            d="M405.372 325.417V283.185H433.906C451.361 283.185 458.746 277.946 465.46 260.268L468.481 252.411L401.009 83.1548H456.396L492.986 188.244L533.604 83.1548H587.313L502.049 282.53C487.951 315.923 469.152 330 439.612 330C427.192 330 415.443 328.363 405.372 325.417Z"
            fill="white"
          />
          <path
            d="M657.28 246.845H608.605V0H660.301V102.143C670.371 87.4107 692.526 77.5893 716.696 77.5893C763.691 77.5893 793.567 113.274 793.567 166.637C793.567 217.381 760.335 251.101 712.667 251.101C689.17 251.101 669.029 240.952 659.965 225.893L657.28 246.845ZM660.636 164.018C660.636 188.571 677.421 204.94 701.59 204.94C726.095 204.94 741.536 188.244 741.536 164.018C741.536 139.792 726.095 123.095 701.59 123.095C677.421 123.095 660.636 139.464 660.636 164.018Z"
            fill="white"
          />
          <path
            d="M848.837 57.619C832.389 57.619 819.297 44.8512 819.297 28.8095C819.297 12.7678 832.389 0.327379 848.837 0.327379C864.95 0.327379 878.042 12.7678 878.042 28.8095C878.042 44.8512 864.95 57.619 848.837 57.619ZM823.325 246.845V83.1548H875.02V246.845H823.325Z"
            fill="white"
          />
          <path
            d="M981.611 246.845H929.915V125.06H898.025V83.1548H929.915V32.4107H981.611V83.1548H1013.5V125.06H981.611V246.845Z"
            fill="white"
          />
          <path
            d="M1170 246.845H1029.35V204.94L1104.54 125.06H1029.35V83.1548H1170V125.06L1092.79 204.94H1170V246.845Z"
            fill="white"
          />
        </svg>
        <div className="my-5 w-full h-[1px] bg-white" />
        <p className="text-[#DAD8EB] text-center">
          Copyright ©2023 buybitz. All rights reserved. Fire Blocks PVT LTD
          D.B.A Buybitz
        </p>
      </Container>
    </footer>
  );
};

export default NewFooter;
