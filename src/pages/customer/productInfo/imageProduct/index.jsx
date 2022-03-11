import React from "react";
import { Col, Row } from "antd";
import "./styles.scss";

export function ImageProduct() {
  return (
    <div className="image-product">
      <Row>
        <Col span={5}>
          <Row>
            <img
              className="sub-img"
              src="https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg"
              alt=""
            />
          </Row>
          <Row>
            <img
              className="sub-img"
              src="https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg"
              alt=""
            />
          </Row>
          <Row>
            <img
              className="sub-img"
              src="https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg"
              alt=""
            />
          </Row>
          <Row>
            <img
              className="sub-img"
              src="https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg"
              alt=""
            />
          </Row>
        </Col>

        <Col span={18} offset={1}>
          <Row>
            <img
              className="main-img"
              src="https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg"
              alt=""
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ImageProduct;
