import * as React from "react";
import { Badge, Dropdown } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CartFast } from "../CartFast/CartFast";
import "./Cart.scss";

export function Cart({ totalUniqueItems, items }) {
  const fastCart = <CartFast items={items} />;
  return (
    <div className="cart">
      <Badge count={<div className="badge-custom">{totalUniqueItems}</div>}>
        <Dropdown overlay={fastCart} placement="bottomRight">
          <ShoppingCartOutlined className="icon-cart" />
        </Dropdown>
      </Badge>
    </div>
  );
}

export default Cart;
