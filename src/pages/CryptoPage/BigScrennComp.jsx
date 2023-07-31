import React, { Fragment } from "react";
import { Col, Row, Button } from "react-bootstrap";

const BigScrennComp = ({ data }) => {
  return (
    <Fragment>
      <Row className="g-2">
        <Col xs={6} sm={6} md={4} lg={3}>
          Name
        </Col>
        <Col xs={6} sm={6} md={4} lg={2}>
          Price
        </Col>
        <Col xs={6} sm={6} md={4} lg={2}>
          24hr Change
        </Col>
        <Col xs={6} sm={6} md={4} lg={2}>
          % Change
        </Col>
        <Col xs={6} sm={6} md={4} lg={2}>
          Market Cap
        </Col>
        <Col xs={6} sm={6} md={4} lg={1}>
          Action
        </Col>
      </Row>
      <hr />
      {data?.map((items, index) => (
        <Fragment key={index}>
          <Row className="g-2 py-3">
            <Col xs={6} sm={6} md={4} lg={3}>
              <div className="d-flex align-items-center">
                <img
                  src={items.image}
                  height={40}
                  className="me-3"
                  alt={items.name}
                />{" "}
                <div className="d-flex flex-column">
                  <h5 className=" my-0">{items.name}</h5>
                  <span
                    className="text-secondary"
                    style={{ textTransform: "uppercase" }}>
                    {items.symbol}
                  </span>
                </div>{" "}
              </div>
            </Col>
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={2}
              className="d-flex align-items-center">
              <p className="fw-semibold my-auto">
                {" "}
                ₹{parseFloat(items.current_price).toLocaleString()}
              </p>
            </Col>
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={2}
              className="d-flex align-items-center">
              <p className="fw-semibold my-auto">
                {" "}
                ₹{parseFloat(items.price_change_24h).toLocaleString()}
              </p>
            </Col>
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={2}
              className="d-flex align-items-center">
              <p
                className={
                  parseFloat(items.price_change_percentage_24h) > 0
                    ? "text-success  my-auto "
                    : "text-danger  my-auto "
                }>
                {parseFloat(items.price_change_percentage_24h).toFixed(2)}%
              </p>
            </Col>
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={2}
              className="d-flex align-items-center">
              <p className="my-auto fw-semibold">
                ₹
                {Intl.NumberFormat("en-IN", { notation: "compact" }).format(
                  items.market_cap
                )}
              </p>
            </Col>
            <Col xs={6} sm={6} md={4} lg={1}>
              <a
                href="https://app.buybitz.com/"
                target="_blank"
                rel="noreferrer">
                <Button className="primary-btn">Buy</Button>
              </a>
            </Col>
          </Row>
          <hr />
        </Fragment>
      ))}
    </Fragment>
  );
};

export default BigScrennComp;
