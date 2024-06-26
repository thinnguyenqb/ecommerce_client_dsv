import * as React from "react";
import { Divider, Button } from "antd";
import { Link } from "react-router-dom";
import "./IntroProduct.scss";

export function IntroProduct({ item }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="intro-product">
      <img
        className="img-intro-product"
        src={item.categoryImage}
        alt="123"
      />
      <div className="container-content">
        <p className="name-intro">{capitalizeFirstLetter(item.categoryName)}</p>
        <Divider color="white" />

        <div className="container-btn">
          <Link to={`/product-list?category=${item.categoryName}&kind=${item.kindCategory}`}>
            <Button className="btn-intro" type="primary">
              Shop now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IntroProduct;
