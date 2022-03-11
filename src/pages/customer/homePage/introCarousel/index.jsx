import * as React from "react";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import "./styles.scss";

export function IntroCarousel() {
  return (
    <Carousel>
      <div className="item-carousel">
        <Link to="/product-list">
          <Button type="primary" className="ant-btn">
            Shop now
          </Button>
        </Link>
        <span className="title">OUTFIT OF THE WEEK</span>
      </div>
    </Carousel>
  );
}

export default IntroCarousel;
