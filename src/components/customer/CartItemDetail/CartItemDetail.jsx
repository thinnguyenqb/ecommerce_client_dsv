import React from "react";
import { Row, Col, Avatar } from "antd";

import "./CartItemDetail.scss";
import { NumbericUpDown } from "../NumbericUpDown/NumbericUpDown";

export function CartItemDetail() {
  return (
    <div className="item-detail-cart">
      <Row type="flex" justify="center" align="middle">
        <Col span={9} type="flex">
          <div className="container__imgInfo">
            <img
              className="image"
              src="https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg"
              alt=""
            />
            <div className="container-description">
              <p className="name-product">Collete Stretch Linen Minidress</p>

              <span className="action">Change</span>
              <span className="">|</span>
              <span className="action">Remove</span>
            </div>
          </div>
         
        </Col>

        <Col span={2} className="container-color">
          <Avatar className="avt-color"></Avatar>
        </Col>

        <Col span={3}>
          <p className="size">S</p>
        </Col>

        <Col span={7} className="container-quantity">
          <NumbericUpDown />
        </Col>

        <Col span={3} className="container-amount">
          <p className="amount">$69.00</p>
        </Col>
      </Row>
    </div>
  );
}

export default CartItemDetail;
