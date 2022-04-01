import * as React from "react";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import "./IntroCarousel.scss";

export function IntroCarousel() {
  return (
    <Carousel autoplay>
      <div className="item-carousel-1">
        <Link to="/product-list/?category=men&kind=tops">
          <Button type="primary" className="ant-btn">
            Shop now
          </Button>
        </Link>
        <span className="title"></span>
      </div>
      {/* <div className="item-carousel-2">
        <Link to="/product-list/?category=men&kind=tops">
          <Button type="primary" className="ant-btn">
            Shop now
          </Button>
        </Link>
        <span className="title"></span>
      </div>
      <div className="item-carousel-3">
        <Link to="/product-list/?category=men&kind=tops">
          <Button type="primary" className="ant-btn">
            Shop now
          </Button>
        </Link>
        <span className="title"></span>
      </div>
      <div className="item-carousel-4">
        <Link to="/product-list/?category=men&kind=tops">
          <Button type="primary" className="ant-btn">
            Shop now
          </Button>
        </Link>
        <span className="title"></span>
      </div> */}
      {/* <div className="item-carousel-5">
        <Link to="/product-list/?category=men&kind=tops">
          <Button type="primary" className="ant-btn">
            Shop now
          </Button>
        </Link>
        <span className="title"></span>
      </div> */}
    </Carousel>
  );
}

export default IntroCarousel;
