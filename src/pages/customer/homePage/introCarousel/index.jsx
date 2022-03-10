import * as React from "react";
import { Carousel, Button } from "antd";
import "./styles.scss";

export function IntroCarousel() {
  return (
    <Carousel>
      <div className="item-carousel">
        <Button type="primary" className="ant-btn">
          Shop now
        </Button>
        <span className="title">OUTFIT OF THE WEEK</span>
      </div>
    </Carousel>
  );
}

export default IntroCarousel;
