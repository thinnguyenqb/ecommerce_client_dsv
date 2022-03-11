import React from "react";
import { Input, Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "./styles.scss";

export function NumbericUpDown() {

  return (
    <div className="numberic-up-down">
      <Button className="btn-sub">
        <PlusOutlined />
      </Button>
      <Input value="1"></Input>
      <Button className="btn-plus">
        <MinusOutlined />
      </Button>
    </div>
  );
}

export default NumbericUpDown;
