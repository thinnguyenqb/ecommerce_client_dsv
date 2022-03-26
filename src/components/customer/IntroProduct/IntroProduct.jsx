import * as React from "react";
import { Divider, Button } from "antd";
import { Link } from "react-router-dom";
import "./IntroProduct.scss";

export function IntroProduct() {
  return (
    <div className="intro-product">
      <img
        className="img-intro-product"
        src="https://cdnimg.vietnamplus.vn/t620/uploaded/xpcwvovt/2015_09_15/20150915_danlen1.jpg"
        alt=""
      />
      <div className="container-content">
        <p className="name-intro">Men</p>
        <Divider color="white" />

        <div className="container-btn">
          <Link to="/product-list/?category=men&kind=tops">
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
