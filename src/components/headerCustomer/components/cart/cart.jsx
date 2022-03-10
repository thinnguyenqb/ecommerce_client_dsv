import * as React from "react";

import "./cart.scss";
import { Badge, Dropdown } from 'antd'
import { FastCart } from '../index'

import {ShoppingCartOutlined} from '@ant-design/icons'

export function Cart() {
  const fastCart = (
    <FastCart />
  );
  return (
    <div className="cart">
      <Dropdown overlay={fastCart} placement="bottomRight">
        <Badge count={5} className="badge-cart">
          <ShoppingCartOutlined className="icon-cart" />
        </Badge>
      </Dropdown>
    </div>
  );
}

export default Cart