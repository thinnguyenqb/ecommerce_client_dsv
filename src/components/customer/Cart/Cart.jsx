import * as React from "react";
import { Badge, Dropdown } from 'antd'
import {ShoppingCartOutlined} from '@ant-design/icons'
import { CartFast } from '../CartFast/CartFast'
import "./Cart.scss";

export function Cart() {
  const fastCart = (
    <CartFast />
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