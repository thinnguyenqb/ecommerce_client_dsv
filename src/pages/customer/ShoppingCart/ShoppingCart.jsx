import React from "react";
import { Row, Col, Layout, Divider } from "antd";
import "./ShoppingCart.scss";
import { Header } from "../../../components/sharedComponent/Header/Header";
import { FooterCustomer } from "../../../components/sharedComponent/Footer/Footer";
import { CartItemDetail } from '../../../components/customer/CartItemDetail/CartItemDetail';
import { CartTotal } from '../../../components/customer/CartTotal/CartTotal';
import { useCart } from "react-use-cart";


function ShoppingCart() {
  const { Content } = Layout;
  const {
    isEmpty,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();


  return (
    <div className="shopping-cart">
      <Header />
      
      <Content className="body-page">
        <Row className="container-header-cart">
          <div className="header-shopping-cart">My bag</div>
        </Row>

        <Row>
          <Col span={16}>
            <Row type="flex" align="middle" className="container-header">
              <Col span={9}>
                <p className="header-item align-start">Product</p>
              </Col>

              <Col span={2}>
                <p className="header-item">Color</p>
              </Col>

              <Col span={3}>
                <p className="header-item">Size</p>
              </Col>

              <Col span={7}>
                <p className="header-item">Quantity</p>
              </Col>

              <Col span={3}>
                <p className="header-item align-end">Amount</p>
              </Col>
            </Row>

            <Divider className="divider-item-cart" />
            {isEmpty && <p>Your cart is empty</p>}

            {
              items.map(item => (
                <div key={item.id}>
                  <CartItemDetail item={item} updateItemQuantity={updateItemQuantity} removeItem={removeItem}/>
                </div>
              ))
            }
          </Col>

          <Col span={7} offset={1}>
            <Row type="flex" align="middle" className="container-header">
              <Col>
                <p className="header-item align-start">Total</p>
              </Col>
            </Row>

            <CartTotal cartTotal={cartTotal} items={items} />
          </Col>
        </Row>
      </Content>

      <FooterCustomer />
    </div>
  );
}

export default ShoppingCart;
