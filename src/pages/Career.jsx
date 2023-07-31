import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomAccordion from "../components/CEX/CustomAccordion";

const Career = () => {
  return (
    <div className="py-20">
      <Container className="py-5">
        <h1 className="fw-semibold mb-5 text-4xl font-semibold">
          Open Position in India{" "}
        </h1>
        <hr />
        <br />
        <br />
        <Row className="g-5">
          <Col xs={12} sm={12} md={3} lg={3}>
            <iframe
              src="https://buybitz.keka.com/careers/api/embedjobs/cb970f75-5de2-4bca-af8f-aeb301901f90"
              frameborder="0"
              height="100%"
              width="100%"></iframe>
          </Col>
          <Col xs={12} sm={12} md={9} lg={9}>
            <CustomAccordion
              heading={<h1 className="text-black">Customer Experience</h1>}
              text={
                <>
                  <h5 className="text-black text-2xl font-semibold">
                    Associate Manager
                  </h5>
                  <p className="text-[#DAD8EB]">Hyderabad, India</p>
                  <br />
                  <h5 className="text-black text-2xl font-semibold">
                    Team Lead
                  </h5>
                  <p className="text-[#DAD8EB]">Hyderabad, India</p>
                </>
              }
            />
            <br />
            <CustomAccordion
              heading={<h1 className="text-black">Engineering</h1>}
              text={
                <>
                  <h5 className="text-black text-2xl font-semibold">
                    Engineering Manager (INDIA REMOTE)
                  </h5>
                  <p className="text-[#DAD8EB]">Remote - India</p>
                  <br />
                  <h5 className="text-black text-2xl font-semibold">
                    Senior Software Engineer (INDIA -REMOTE)
                  </h5>
                  <p className="text-[#DAD8EB]">Remote - India</p>
                </>
              }
            />
            <br />
            <CustomAccordion
              heading={<h1 className="text-black">Engineering - Backend</h1>}
              text={
                <>
                  <h5 className="text-black text-2xl font-semibold">
                    Senior Software Engineer, Backend -Consumer
                  </h5>
                  <p className="text-[#DAD8EB]">Remote - India</p>
                  <br />
                  <h5 className="text-black text-2xl font-semibold">
                    Staff Software Engineer, Backend - International
                  </h5>
                  <p className="text-[#DAD8EB]">Remote - India</p>
                </>
              }
            />
            <br />
            <CustomAccordion
              heading={<h1 className="text-black">Engineering - Data</h1>}
              text={
                <>
                  <h5 className="text-black text-2xl font-semibold">
                    Staff Machine Learning Platform Engineer
                  </h5>
                  <p className="text-[#DAD8EB]">Remote - India</p>
                </>
              }
            />
            <br />
            <CustomAccordion
              heading={
                <h1 className="text-black">Engineering - Infrastructure</h1>
              }
              text={
                <>
                  <h5 className="text-black text-2xl font-semibold">
                    Staff Software Engineer - Data Platform
                  </h5>
                  <p className="text-[#DAD8EB]">Remote - India</p>
                </>
              }
            />
            <br />
            <CustomAccordion
              heading={<h1 className="text-black">Engineering - Manager</h1>}
              text={
                <>
                  <h5 className="text-black text-2xl font-semibold">
                    Engineering Manager
                  </h5>
                  <p className="text-[#DAD8EB]">Remote - India</p>
                </>
              }
            />
            <br />
            <CustomAccordion
              heading={<h1 className="text-black">Product</h1>}
              text={
                <>
                  <h5 className="text-black text-2xl font-semibold">
                    Senior Product Manager
                  </h5>
                  <p className="text-[#DAD8EB]">Remote - India</p>
                </>
              }
            />
            <br />
            <CustomAccordion
              heading={<h1 className="text-black">Security & Privacy</h1>}
              text={
                <>
                  <h5 className="text-black text-2xl font-semibold">
                    Principal, International Security GRC Analyst
                  </h5>
                  <p className="text-[#DAD8EB]">Remote - India</p>
                </>
              }
            />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Career;
