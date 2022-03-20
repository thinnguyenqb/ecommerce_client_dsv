import * as React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import { Card } from "antd";

function ProductCard({ product }) {
  const { Meta } = Card;
  console.log(product)
  return (
    <div className="product">
      <Link to="/product-info">
        <Card
          bordered={false}
          hoverable
          cover={<img className="card-img" alt="example" src={product.productImageUrl[0]} />}
        >
          <Meta
            src="/product-info"
            title={product.productName}
            description={`$${product.productPrice}.00`}
          />
        </Card>
      </Link>
    </div>
  );
}

export default ProductCard;
