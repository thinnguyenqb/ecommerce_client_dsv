import React from "react";
import { Layout, Row, Col } from "antd";
import "./HomePage.scss";
import IntroCarousel from "../../../components/customer/IntroCarousel/IntroCarousel";
import IntroProduct from "../../../components/customer/IntroProduct/IntroProduct";
import { FooterCustomer } from "../../../components/sharedComponent/Footer/Footer";
import { Header } from "../../../components/sharedComponent/Header/Header";

export function HomePage() {
  const { Content } = Layout;

  return (
    <div className="home-page">
      <Header />

      <Content className="body-page">
        <Row>
          <Col span={24}>
            <IntroCarousel />
          </Col>
        </Row>

        <Row className="container-intro-product" gutter={20}>
          <Col span={6}>
            <IntroProduct />
          </Col>

          <Col span={6}>
            <IntroProduct />
          </Col>

          <Col span={6}>
            <IntroProduct />
          </Col>

          <Col span={6}>
            <IntroProduct />
          </Col>
        </Row>
      </Content>

      <FooterCustomer />
    </div>
  );
}

export default HomePage;
