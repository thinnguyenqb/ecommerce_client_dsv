import * as React from "react";
import { Card, Avatar } from 'antd';
import "./ItemFastCart.scss";

export function ItemFastCart({item}) {
  const { Meta } = Card;

  return (
    <div>
      <Card className="item-fast-cart"
        style={{ width: 300 }}
      >
        <Meta
          avatar={<Avatar shape="square" src={item.productImg} />}
          title={item.productName}
          description={`$${item.price}.00 x ${item.quantity}`}
          // description="$485 S - Black - 1 pcs"
        />
      </Card>
    </div>
  );

}

export default ItemFastCart