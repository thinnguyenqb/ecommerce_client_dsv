import React from "react";
import { Row, Col, Button, Divider } from "antd";
import "./CartTotal.scss";
import { useDispatch } from 'react-redux';
import { cancelOrder } from "../../../redux/actions/orderAction";
import { checkoutOrder } from './../../../redux/actions/orderAction';

export function CartTotal({ cartTotal, items }) {
  
  const dispatch = useDispatch()

  const handleCancelOrder = async () => {
    await dispatch(cancelOrder())
  }
  const handleCheckoutOrder = async () => {
    const data = {
      listProduct: items,
      totalPrice: cartTotal
    }
    
    await dispatch(checkoutOrder(data))
  }



  return (
    <div className="total-cart">
      <div className="container-content">
        <Row>
          <Col span={18} className="text-title">
            Shipping & Handling:
          </Col>
          <Col span={6} className="text-price">
            Free
          </Col>
        </Row>

        <Row>
          <Col span={18} className="text-title">
            Total product:
          </Col>
          <Col span={6} className="text-price">
            ${cartTotal}.00
          </Col>
        </Row>

        <Divider className="divider-total" />

        <Row>
          <Col span={18} className="title-total">
            Subtotal
          </Col>
          <Col span={6} className="price-total">
            ${cartTotal}.00
          </Col>
        </Row>
      </div>

      <Row >
        <Col span={12}>
          <Button type="primary" className="btn-cancle" ghost onClick={() => handleCancelOrder()}>
            Cancel order
          </Button>
        </Col>
        <Col span={12}>
          <Button type="primary" className="btn-checkout" onClick={() => handleCheckoutOrder()}>
            Check out
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default CartTotal;
