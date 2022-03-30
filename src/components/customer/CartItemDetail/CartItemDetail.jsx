import React from "react";
import { Row, Col, Avatar, Button, Input, Tooltip} from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./CartItemDetail.scss"


export function CartItemDetail({item, updateItemQuantity, removeItem}) {
  return (
    <div className="item-detail-cart">
      <Row type="flex" justify="center" align="middle">
        <Col span={9} type="flex">
          <div className="container__imgInfo">
            <img
              className="image"
              src={item.productImg}
              alt=""
            />
            <div className="container-description">
              <Link to={`/product-info/${item.id}`}>
                <p className="name-product">{item.productName}</p>
              </Link>
              <span className="action">Change</span>
              <span className="">|</span>
              <span className="action" onClick={() => removeItem(item.id)}>Remove</span>
            </div>
          </div>
         
        </Col>

        <Col span={2} className="container-color">
          <Avatar className="avt-color" style={{backgroundColor: `${item.colorOption}`}}></Avatar>
        </Col>

        <Col span={3}>
          <p className="size">{item.sizeOption}</p>
        </Col>

        <Col span={7} className="container-quantity">
          <div className="numberic-up-down">
            <Button className="btn-plus" onClick={() => item.quantity <= item.pieceAvailable && updateItemQuantity(item.id, item.quantity - 1)}>
              <MinusOutlined />
            </Button>
            <Tooltip title={`${item.pieceAvailable} piece available`}>
              <Input value={item.quantity} />
            </Tooltip>
            <Button className="btn-sub" onClick={() =>  item.quantity < item.pieceAvailable && updateItemQuantity(item.id, item.quantity + 1)}>
              <PlusOutlined />
            </Button>
          </div>
        </Col>

        <Col span={3} className="container-amount">
          <p className="amount">${item.itemTotal}</p>
        </Col>
      </Row>
    </div>
  );
}

export default CartItemDetail;
