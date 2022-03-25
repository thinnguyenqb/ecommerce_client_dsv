import * as React from "react";
import { Badge, Dropdown } from 'antd'
import {ShoppingCartOutlined} from '@ant-design/icons'
import { CartFast } from '../CartFast/CartFast'
import "./Cart.scss";

export function Cart({totalUniqueItems, items}) {
  const fastCart = (
    <CartFast items={items}/>
  );
  return (
    <div className="cart">
      <Dropdown overlay={fastCart} placement="bottomRight">
        <Badge count={totalUniqueItems} className="badge-cart">
          <ShoppingCartOutlined className="icon-cart" />
        </Badge>
      </Dropdown>
    </div>
  );
}

export default Cart