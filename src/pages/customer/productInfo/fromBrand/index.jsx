import React from "react";
import { Col, Row } from "antd";

import "./styles.scss";

export function FromBrand() {
  return (
    <div className="from-brand">
      <Row type="flex" justify="start">
        <Col>
          <p className="header">More from</p>
          <p className="name-brand">Zara</p>
        </Col>

        <Col className="container-image">
          <img
            className="image"
            src="https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg"
            alt=""
          />
        </Col>

        <Col container-image>
          <img
            className="image"
            src="https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg"
            alt=""
          />
        </Col>
        <Col className="container-image">
          <img
            className="image"
            src="https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg"
            alt=""
          />
        </Col>

        <Col container-image>
          <img
            className="image"
            src="https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg"
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
}

export default FromBrand;
