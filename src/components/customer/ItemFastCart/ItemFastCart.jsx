import * as React from "react";
import { Card, Avatar } from 'antd';
import "./ItemFastCart.scss";

export function ItemFastCart() {
  const { Meta } = Card;

  return (
    <div>
      <Card className="item-fast-cart"
        style={{ width: 300 }}
      >
        <Meta
          avatar={<Avatar shape="square" src="https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg" />}
          title="New Balance Men's Street Backpack"
          description="$485 S - Black - 1 pcs"
        />
      </Card>
    </div>
  );

}

export default ItemFastCart