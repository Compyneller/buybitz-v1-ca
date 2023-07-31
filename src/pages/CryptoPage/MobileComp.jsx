import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

const MobileComp = ({ data }) => {
  return (
    <Fragment>
      {data?.map((items, index) => (
        <Fragment key={index}>
          <Row className="g-2 py-1">
            <Col
              xs={6}
              sm={6}
              md={6}
              lg={6}
              className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src={items.image}
                  height={35}
                  className="me-3"
                  alt={items.name}
                />{" "}
                <div className="d-flex flex-column">
                  <h5 className=" my-0">{items.name}</h5>
                  <span
                    className="text-secondary"
                    style={{ textTransform: "uppercase" }}>
                    {items.symbol}USD
                  </span>
                </div>{" "}
              </div>
            </Col>
            <Col
              xs={6}
              sm={6}
              md={6}
              lg={6}
              className="d-flex flex-column align-items-end">
              <p className="py-0">
                ${parseFloat(items.current_price).toLocaleString()}
              </p>
              <p className="py-0">
                {" "}
                ${parseFloat(items.price_change_24h).toLocaleString()}
              </p>
              <p
                className={
                  parseFloat(items.price_change_percentage_24h) > 0
                    ? "text-success py-0  my-auto "
                    : "text-danger py-0  my-auto "
                }>
                {parseFloat(items.price_change_percentage_24h).toFixed(2)}%
              </p>
            </Col>
          </Row>
          <hr />
        </Fragment>
      ))}
    </Fragment>
  );
};

export default MobileComp;
