import React from "react";
import { Card } from "antd";

import "./ProductSimilar.scss";

export function ProductSimilar() {
  const { Meta } = Card;

  return (
    <div className="similar-product">
      <Card
        hoverable
        bordered={false}
        cover={
          <img
            alt="example"
            className="card-img"
            src="https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg"
          />
        }
      >
        <Meta title="Europe Street beat" />
      </Card>
    </div>
  );
}

export default ProductSimilar;
