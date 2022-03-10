import React from "react";
import { Layout, Row, Col, Carousel, Divider  } from "antd";
import "./styles.scss";
import IntroCarousel from './introCarousel'
import IntroProduct from './introProduct'
import { FooterCustomer } from "../../../components/footerCustomer/footerCustomer";
import { HeaderCustomer } from "../../../components/headerCustomer/headerCustomer";

export function HomePage() {
  const { Content, Sider, Footer } = Layout;

  return (
    <div>
      <HeaderCustomer />
      <Layout>
        <Sider style={{backgroundColor: 'white'}}/>
        <Content>
          <IntroCarousel />
          <Divider orientation="left">sub-element monospaced arrangement</Divider>
            <Row justify="space-between">
              <Col><IntroProduct /></Col>
              <Col><IntroProduct /></Col>
              <Col><IntroProduct /></Col>
              <Col><IntroProduct /></Col>
            </Row>
        </Content>
        <Sider style={{backgroundColor: 'white'}}/>
      </Layout>
      <FooterCustomer />
    </div>
  );
}

export default HomePage;
