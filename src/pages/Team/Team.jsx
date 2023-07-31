import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import image1 from "../../assets/team/WhatsApp Image 2023-07-11 at 4.08.25 PM.jpg";
import image2 from "../../assets/team/WhatsApp Image 2023-07-11 at 4.08.25 PM (1).jpg";
import image3 from "../../assets/team/WhatsApp Image 2023-07-11 at 4.08.25 PM (2).jpg";
import SubHero from "../../components/SubHero/SubHero";
import "./Team.css";
import { AiOutlineLinkedin } from "react-icons/ai";
const Team = () => {
  return (
    <>
      <SubHero heading="Building Buybitz" />
      <div className="py-5">
        <Container className="py-5">
          <Row className="g-3">
            <Col xs={12} sm={12} md={6} lg={4}>
              <Card className="team-card">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <img src={image1} alt="" />
                  <h5 className="fw-semibold my-4">Prem Bhalla</h5>
                  <p>
                    I recognize a significant gap and an incredible opportunity
                    in the market. There is currently a lack of a seamless
                    centralized exchange that enables users to connect with web3
                    and fully embrace the world of permissionless finance. After
                    years of dedicated research and effort, we are proud to
                    announce our latest endeavor: Buybitz, India’s Digital
                    Assets Marketplace.
                  </p>
                  <h6 className="my-4">--CEO and COO </h6>
                  <a
                    href="https://www.linkedin.com/in/prem-bhalla-800aa6282/"
                    target="_blank">
                    <AiOutlineLinkedin size={35} className="ms-3" />
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <Card className="team-card">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <img src={image2} alt="" />
                  <h5 className="fw-semibold my-4">Suman Bhalla</h5>
                  <p>
                    It has been four years since I immersed myself in the world
                    of cryptocurrencies, investing in various DeFi protocols and
                    conducting extensive research. However, when Prem approached
                    me with his ambitious vision of establishing India as a
                    global web3 hub, I couldn’t resist the opportunity. Without
                    hesitation, I joined the firm as an Angel Investor, fully
                    committed to making this vision a reality.
                  </p>
                  <h6 className="my-4">--Angel Investor </h6>
                  <a
                    href="https://www.linkedin.com/in/suman-bhalla-46baa9282/"
                    target="_blank">
                    <AiOutlineLinkedin size={35} className="ms-3" />
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <Card className="team-card">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <img src={image3} alt="" />
                  <h5 className="fw-semibold my-4">Kapil Dev Chadha</h5>
                  <p>
                    I bring over 10 years of experience in the Real Estate and
                    Traditional Finance markets. When Prem, a tech-savvy
                    individual, shared his vision of establishing a
                    cryptocurrency exchange in India, I couldn’t resist the
                    opportunity. Recognizing the immense potential, I promptly
                    acquired a major stake in the firm, becoming
                    an angel investor.
                  </p>
                  <h6 className="my-4">--Angel Investor </h6>
                  <a
                    href="https://www.linkedin.com/in/kapil-dev-chadha-984aa9282/"
                    target="_blank">
                    <AiOutlineLinkedin size={35} className="ms-3" />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Team;
