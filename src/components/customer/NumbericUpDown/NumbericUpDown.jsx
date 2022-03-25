import React from "react";
import { Input, Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "./NumbericUpDown.scss";

export function NumbericUpDown({quantity, setQuantity}) {
  
  const upCount = (quantity) => {
    setQuantity(quantity + 1)
  }
  
  const downCount = (quantity) => {
    if (quantity > 1)
    setQuantity(quantity - 1)
  }

  return (
    <div className="numberic-up-down">
      <Button className="btn-plus" onClick={() => downCount(quantity)}>
        <MinusOutlined />
      </Button>
      <Input value={quantity}></Input>
      <Button className="btn-sub" onClick={ () => upCount(quantity)}>
        <PlusOutlined />
      </Button>
    </div>
  );
}

export default NumbericUpDown;
