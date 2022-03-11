import React from "react";
import { Layout, Row, Col } from "antd";
import "./styles.scss";
import IntroCarousel from "./introCarousel";
import IntroProduct from "./introProduct";
import { FooterCustomer } from "../../../components/footerCustomer";
import { HeaderCustomer } from "../../../components/headerCustomer/headerCustomer";

export function HomePage() {
  const { Content } = Layout;

  return (
    <div className="home-page">
      <HeaderCustomer />

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
