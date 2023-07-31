import React, { useEffect, useState } from "react";
import { Button, Col, Collapse, ProgressBar, Row } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const CustomAccordion = ({ heading, text, body }) => {
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div
      className={`py-11 px-12 rounded-[20px] border-[1.5px] ${
        open ? "bg-[#4700FB]" : "bg-transparent"
      }`}>
      <Button
        className="w-100 bg-transparent outline-none border-none flex items-center justify-between text-white"
        onClick={() => setOpen(!open)}>
        <h5 className="text-xl md:text-[28px] font-semibold">{heading}</h5>
        {open ? (
          <AiOutlineMinus
            size={30}
            color={path === "/career" ? "black" : "white"}
          />
        ) : (
          <AiOutlinePlus
            size={30}
            color={path === "/career" ? "black" : "white"}
          />
        )}
      </Button>

      <Collapse in={open} className="mt-3">
        <div id="example-collapse-text text-dark ">
          <div>
            <p className="text-[16px] text-[#ECEBF5]">{text}</p>
          </div>

          {body && (
            <Row className="mt-4">
              <Col xs={12} sm={12} md={6} lg={6}>
                <Row className="g-2">
                  <Col xs={3} sm={3} md={4} lg={4}>
                    <p className="fw-semibold">Coinswitch kuber</p>
                  </Col>
                  <Col xs={9} sm={9} md={8} lg={8}>
                    <ProgressBar now={70} label="0.50%" variant="danger" />
                  </Col>
                  <Col xs={3} sm={3} md={4} lg={4}>
                    <p className="fw-semibold">CoinDCX</p>
                  </Col>
                  <Col xs={9} sm={9} md={8} lg={8}>
                    <ProgressBar now={50} label="0.20%" variant="danger" />
                  </Col>
                  <Col xs={3} sm={3} md={4} lg={4}>
                    <p className="fw-semibold">WazirX</p>
                  </Col>
                  <Col xs={9} sm={9} md={8} lg={8}>
                    <ProgressBar now={35} label="0.15%" variant="danger" />
                  </Col>
                  <Col xs={3} sm={3} md={4} lg={4}>
                    <p className="fw-semibold">Buybitz</p>
                  </Col>
                  <Col xs={9} sm={9} md={8} lg={8}>
                    <ProgressBar now={10} label="0%" variant="success" />
                  </Col>
                </Row>
              </Col>
            </Row>
          )}
        </div>
      </Collapse>
    </div>
  );
};

export default CustomAccordion;
