import React from "react";
import { Col, Row, Layout, Divider } from "antd";
import Product from "./product";
import Fitler from "./fitler";
import CategoryFitler from "./categoryFitler";
import { HeaderCustomer } from "../../../components/headerCustomer/headerCustomer";
import { FooterCustomer } from "../../../components/footerCustomer";
import { BreadcrumbMain } from "../../../components/breadcrumbMain";
import { Order } from "../../../components/order/order";
import { PaginationCustomer } from "../../../components/paginationCustomer/paginationCustomer";
import "./styles.scss";

const product = [
  {
    id: "1",
    name: "Collete Stretch Linen Minidress",
    link: "https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg",
    price: "$69.00",
  },
  {
    id: "2",
    name: "Plunge V-neck Denim Mini Dress",
    link: "https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg",
    price: "$69.00",
  },
  {
    id: "3",
    name: "Collete Stretch Linen Minidress",
    link: "https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg",
    price: "$69.00",
  },
  {
    id: "4",
    name: "Collete Stretch Linen Minidress",
    link: "https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg",
    price: "$69.00",
  },
  {
    id: "5",
    name: "Collete Stretch Linen Minidress",
    link: "https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg",
    price: "$69.00",
  },
  {
    id: "6",
    name: "Collete Stretch Linen Minidress",
    link: "https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg",
    price: "$69.00",
  },
  {
    id: "7",
    name: "Collete Stretch Linen Minidress",
    link: "https://i.pinimg.com/originals/a8/8d/a1/a88da1c318ed7b588296391808821694.jpg",
    price: "$69.00",
  },
];

function ProductList() {
  const { Content } = Layout;

  return (
    <div className="product-list">
      <HeaderCustomer />

      <Content className="body-page">
        <Row
          className="top-product-list"
          type="flex"
          justify="space-around"
          align="middle"
        >
          <BreadcrumbMain />
        </Row>

        <Row type="flex" align="middle">
          <Col span={4}>
            <p className="header-fitler">Category</p>
          </Col>
          <Col span={5} offset={1}>
            <Order />
          </Col>
          <Col span={5} offset={9}>
            <PaginationCustomer />
          </Col>
        </Row>

        <Row>
          <Col span={4}>
            <CategoryFitler />
            <Divider />
            <p className="header-fitler">Fitler</p>
            <Fitler />
          </Col>

          <Col span={19} offset={1}>
            <Row gutter={20}>
              {product.map((element) => {
                return (
                  <Col className="col-product" span={5}>
                    <Product key={element.id} product={element} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        <Row type="flex" align="top">
          <Col span={5} offset={19} type="flex" justify="end" className="pagination-c" >
            <PaginationCustomer />
          </Col>
        </Row>
      </Content>

      <FooterCustomer />
    </div>
  );
}

export default ProductList;
