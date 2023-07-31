import React, { useState } from "react";
import { Col, Collapse, Container, Row } from "react-bootstrap";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import arrow from "../assets/Frame.png";
import { BsMedium, BsTwitter, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
const MobileFooter = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  // const [open4, setOpen4] = useState(false);
  // const [open5, setOpen5] = useState(false);
  // const [open6, setOpen6] = useState(false);
  return (
    <footer className="w-100 py-5 new-footer" style={{ background: "#020710" }}>
      <Container>
        <Row>
          <Col xs={4} sm={4} className="d-flex flex-column align-items-center">
            <img
              src={logo}
              alt=""
              className="w-100"
              style={{ filter: "invert(1)", mixBlendMode: "lighten" }}
            />
            <h3 className="fw-bold text-light ">Buybitz</h3>
          </Col>
          <Col
            xs={8}
            sm={8}
            className="d-flex justify-content-center align-items-center text-light">
            <div>
              <div
                className="d-flex justify-content-center justify-content-lg-start "
                style={{ gap: "1rem" }}>
                <a
                  href="https://www.instagram.com/buybitz_app/"
                  target="_blank">
                  <AiFillInstagram size={40} color="#ffff" />
                </a>
                <a
                  href="https://www.youtube.com/@Buybitz108/featured"
                  target="_blank">
                  <BsYoutube size={40} color="#ffff" />
                </a>
                <a href="https://twitter.com/Buybitz_" target="_blank">
                  <BsTwitter size={40} color="#ffff" />
                </a>
                <a
                  href="https://medium.com/@buybitz/buybitz-is-a-company-that-offers-its-clients-access-to-the-world-of-bitcoin-a6329da928e8"
                  target="_blank">
                  <BsMedium size={40} color="#ffff" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Row className="g-3">
          <Col xs={12} sm={12}>
            <div
              className="flex items-center justify-between"
              onClick={() => setOpen(!open)}
              aria-expanded={open}>
              <p className="my-auto text-white">USEFUL LINKS</p>{" "}
              <p className="my-auto">
                <AiOutlineArrowRight
                  color="white"
                  style={{
                    transform: `${open ? "rotate(90deg)" : "rotate(0)"}`,
                    transition: "250ms ease-in-out",
                  }}
                />
              </p>
            </div>

            <Collapse in={open}>
              <div id="example-collapse-text" className="mt-3">
                <Link
                  onClick={() => window.scroll(0, 0)}
                  to="/about"
                  className="text-light footer-link-text">
                  About
                </Link>{" "}
                <br />
                <br />
                <Link
                  to="/career"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}>
                  Career
                </Link>
                <br />
                <br />
                <Link
                  onClick={() => window.scroll(0, 0)}
                  to="/team"
                  className="text-light footer-link-text">
                  Building Buybitz
                </Link>{" "}
                <br />
                <br />
                <Link
                  onClick={() => window.scroll(0, 0)}
                  to="/privacy"
                  className="text-light footer-link-text mb-3">
                  Privacy
                </Link>
                <br />
                <br />
                <Link
                  onClick={() => window.scroll(0, 0)}
                  to="/cookies"
                  className="text-light footer-link-text mb-3">
                  Cookies
                </Link>{" "}
                <br />
                <br />
                <Link
                  onClick={() => window.scroll(0, 0)}
                  to="/tc"
                  className="text-light footer-link-text mb-3">
                  User Agreement
                </Link>
                <br />
                <br />
                <Link
                  onClick={() => window.scroll(0, 0)}
                  to="/terms-conditions"
                  className="text-light footer-link-text mb-3">
                  Terms and Conditions
                </Link>
                <br />
                <br />
                <Link
                  onClick={() => window.scroll(0, 0)}
                  to="/terms-policy"
                  className="text-light footer-link-text mb-3">
                  OTC Terms and Policy
                </Link>
                <br />
                <br />
                <Link
                  onClick={() => window.scroll(0, 0)}
                  to="https://cointelegraph.com/"
                  target="_blank"
                  className="text-light footer-link-text mb-3">
                  News
                </Link>{" "}
                <br />
                <br />
                <Link
                  onClick={() => window.scroll(0, 0)}
                  to="/fees"
                  className="text-light footer-link-text mb-3">
                  Fees
                </Link>
                <br />
                <br />
                <Link
                  onClick={() => window.scroll(0, 0)}
                  to="/risk"
                  className="text-light footer-link-text mb-3">
                  Risk Disclosure
                </Link>
                <br />
                <br />
                <Link
                  onClick={() => window.scroll(0, 0)}
                  to="/law"
                  className="text-light  footer-link-text">
                  Law Enforcement Requests
                </Link>
                <br />
                <br />
                <a
                  href="mailto:media@buybitz.in"
                  className="text-light  footer-link-text">
                  Media Collaboration
                </a>
                <br />
                <br />
                <a
                  href="mailto:business@buybitz.in"
                  className="text-light  footer-link-text">
                  Let’s Collaborate
                </a>
                <br />
              </div>
            </Collapse>
          </Col>
          <div className="footer-divider" />
          <Col xs={12} sm={12}>
            <div
              className="flex items-center justify-between"
              onClick={() => setOpen1(!open1)}
              aria-expanded={open1}>
              <p className="my-auto text-white">PRODUCTS</p>{" "}
              <p className="my-auto">
                <AiOutlineArrowRight
                  color="white"
                  style={{
                    transform: `${open1 ? "rotate(90deg)" : "rotate(0)"}`,
                    transition: "250ms ease-in-out",
                  }}
                />
              </p>
            </div>

            <Collapse in={open1}>
              <div id="example-collapse-text" className="mt-3">
                <Link
                  to="/otc"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}>
                  OTC
                </Link>
                <br />
                <br />
                <Link
                  to="https://play.google.com/store/apps/details?id=com.fireblocks.buybitz&hl=en_IN&gl=US"
                  className="text-light"
                  target="_blank"
                  onClick={() => window.scroll(0, 0)}>
                  Android App
                </Link>
                <br />
                <br />
                <Link
                  to="https://apps.apple.com/in/app/buybitz-fire-blocks-pvt-ltd/id1671975411"
                  className="text-light"
                  target="_blank"
                  onClick={() => window.scroll(0, 0)}>
                  iOS App
                </Link>
                <br />
                <br />
                <Link
                  to="/otc"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}>
                  Web Platform
                </Link>
                <br />
                <br />
                <Link
                  to="/prices"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}>
                  Prices
                </Link>
                <br />
              </div>
            </Collapse>
          </Col>
          <div className="footer-divider" />
          <Col xs={12} sm={12}>
            <div
              className="flex items-center justify-between"
              onClick={() => setOpen2(!open2)}
              aria-expanded={open2}>
              <p className="my-auto text-white">SUPPORT</p>{" "}
              <p className="my-auto">
                <AiOutlineArrowRight
                  color="white"
                  style={{
                    transform: `${open2 ? "rotate(90deg)" : "rotate(0)"}`,
                    transition: "250ms ease-in-out",
                  }}
                />
              </p>
            </div>

            <Collapse in={open2}>
              <div id="example-collapse-text" className="mt-3">
                <a
                  href="mailto:contact@buybitz.in"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}>
                  Contact Us
                </a>

                <br />
                <br />
                <Link
                  to="/help"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}>
                  Help Center
                </Link>
                <br />
                <br />
                <Link
                  to="/how-to-create-account"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}>
                  Create Account
                </Link>
                <br />
                <br />
                <Link
                  to="/manage-my-account"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}>
                  ID Verification
                </Link>
                <br />
                <br />
                <Link
                  to="/kyc-verification"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}>
                  KYC Verification
                </Link>
                <br />
                <br />
                <Link
                  to="/how-to-withdraw-fiat"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}>
                  How to withdraw Fiat?
                </Link>
                <br />
                <br />
                <Link
                  to="/how-to-deposit"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}>
                  How to deposit Fiat?{" "}
                </Link>
                <br />
                <br />
                <Link
                  to="/crypto-safety-guideline"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}>
                  Crypto Safety Guideline
                </Link>

                <br />
              </div>
            </Collapse>
          </Col>
          <div className="footer-divider" />
          <Col xs={12} sm={12}>
            <div
              className="flex items-center justify-between"
              onClick={() => setOpen3(!open3)}
              aria-expanded={open3}>
              <p className="my-auto text-white">ENQUIRY</p>{" "}
              <p className="my-auto">
                <AiOutlineArrowRight
                  color="white"
                  style={{
                    transform: `${open3 ? "rotate(90deg)" : "rotate(0)"}`,
                    transition: "250ms ease-in-out",
                  }}
                />
              </p>
            </div>

            <Collapse in={open3}>
              <div id="example-collapse-text" className="mt-3">
                <Link
                  to="mailto:contact@buybitz.in"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}>
                  contact@buybitz.in
                </Link>
                <br />
                <br />
                <Link
                  to="mailto:otc@buybitz.in"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}>
                  otc@buybitz.in
                </Link>
                <br />
                <br />
                <Link
                  to="mailto:legal@buybitz.in"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}>
                  legal@buybitz.in
                </Link>
                <br />
                <br />
                <Link
                  to="mailto:support@buybitz.in"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}>
                  support@buybitz.in
                </Link>
                <br />
              </div>
            </Collapse>
          </Col>
          {/* <div className="footer-divider" />
          <Col xs={12} sm={12}>
            <div
              className="flex items-center justify-between"
              onClick={() => setOpen4(!open4)}
              aria-expanded={open4}>
              <p className="my-auto">LEARN</p>{" "}
              <p className="my-auto">
                <AiOutlineArrowRight
                  style={{
                    transform: `${open4 ? "rotate(90deg)" : "rotate(0)"}`,
                    transition: "250ms ease-in-out",
                  }}
                />
              </p>
            </div>

            <Collapse in={open4}>
              <div id="example-collapse-text" className="mt-3">
                <Link
                  to="https://academy.binance.com/en/articles/what-is-bitcoin"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}
                  target="_blank">
                  What is Bitcoin?
                </Link>
                <br />
                <br />
                <Link
                  to="https://academy.binance.com/en/articles/what-is-ethereum"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}
                  target="_blank">
                  What is Ethereum?
                </Link>
                <br />
              </div>
            </Collapse>
          </Col>
          <div className="footer-divider" />
          <Col xs={12} sm={12}>
            <div
              className="flex items-center justify-between"
              onClick={() => setOpen5(!open5)}
              aria-expanded={open5}>
              <p className="my-auto">WHITEPAPER</p>{" "}
              <p className="my-auto">
                <AiOutlineArrowRight
                  style={{
                    transform: `${open5 ? "rotate(90deg)" : "rotate(0)"}`,
                    transition: "250ms ease-in-out",
                  }}
                />
              </p>
            </div>

            <Collapse in={open5}>
              <div id="example-collapse-text" className="mt-3">
                <Link
                  to="https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiTzfO8vdb-AhV4UGwGHecPCZAQFnoECAsQAQ&url=https%3A%2F%2Fethereum.org%2Fen%2Fwhitepaper%2F&usg=AOvVaw2hfEJaY3ymAYnCET9maEz3"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}
                  target="_blank">
                  Ethereum Whitepaper
                </Link>
                <br />
                <br />
                <Link
                  to="https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwji1anKvdb-AhVYcWwGHRRAAlUQFnoECAoQAQ&url=https%3A%2F%2Fbitcoin.org%2Fbitcoin.pdf&usg=AOvVaw05-4mYD7EyyKjwcHh8i0Vw"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}
                  target="_blank">
                  Bitcoin Whitepaper
                </Link>
                <br />
              </div>
            </Collapse>
          </Col>
          <div className="footer-divider" />
          <Col xs={12} sm={12}>
            <div
              className="flex items-center justify-between"
              onClick={() => setOpen6(!open6)}
              aria-expanded={open6}>
              <p className="my-auto">INVESTORS</p>{" "}
              <p className="my-auto">
                <AiOutlineArrowRight
                  style={{
                    transform: `${open6 ? "rotate(90deg)" : "rotate(0)"}`,
                    transition: "250ms ease-in-out",
                  }}
                />
              </p>
            </div>

            <Collapse in={open6}>
              <div id="example-collapse-text" className="mt-3">
                <Link
                  to="https://www.coinglass.com/"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}
                  target="_blank">
                  Coinglass
                </Link>
                <br />
                <br />
                <Link
                  to="https://coinmarketcap.com"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}
                  target="_blank">
                  CoinMarketCap
                </Link>
                <br />
                <br />
                <Link
                  to="https://www.coingecko.com"
                  className="text-light"
                  onClick={() => window.scroll(0, 0)}
                  target="_blank">
                  Coingecko
                </Link>
                <br />
              </div>
            </Collapse>
          </Col> */}
        </Row>
        <br />

        <br />
        <div className="d-flex align-items-center my-auto justify-content-center">
          <p
            className="my-auto text-center"
            style={{ color: "#D3D3D3", fontSize: "12px" }}>
            Copyright ©2023 buybitz. All rights reserved. Fire Blocks PVT
            LTD D.B.A Buybitz
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default MobileFooter;
