import React from "react";
import { Col, Row } from "antd";
import "./ProductImage.scss";

export function ProductImage({ productInfo }) {
  return (
    <div className="image-product">
      <Row>
        <Col span={5}>
          {
            productInfo?.productImageUrl?.map((item, index) => (
              <Row key={index}>
                <img
                  className="sub-img"
                  src={item}
                  alt="img"
                />
              </Row>
            ))
          }
        </Col>

        <Col span={18} offset={1}>
          <Row>
            <img
              className="main-img"
              src={productInfo?.productImageUrl?.[0]}
              alt="img"
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ProductImage;
