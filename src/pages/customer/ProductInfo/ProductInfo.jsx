import React, {useState} from "react";
import { Col, Row, Layout, Divider } from "antd";
import { CommentList } from "../../../components/customer/CommentList/CommentList";
import { ProductBrand } from "../../../components/customer/ProductBrand/ProductBrand";
import { ProductImage } from "../../../components/customer/ProductImage/ProductImage";
import { ProductSimilar } from "../../../components/customer/ProductSimilar/ProductSimilar";
import { ProductDetail } from "../../../components/customer/ProductDetail/ProductDetail";
import { Header } from "../../../components/sharedComponent/Header/Header";
import { BreadcrumbMain } from "../../../components/customer/BreadcrumbMain/BreadcrumbMain";
import { FooterCustomer } from "../../../components/sharedComponent/Footer/Footer";
import { ProductPagination } from "../../../components/customer/ProductPagination/ProductPagination";
import "./ProductInfo.scss";

function ProductInfo() {
  const { Content } = Layout;
  return (
    <div className="product-info">
      <Header />

      <Content className="body-page">
        <Row
          className="top-product-info"
          type="flex"
          justify="space-around"
          align="middle"
        >
          <BreadcrumbMain />
        </Row>
        
        <Row>
          <Col span={10}>
            <ProductImage />
          </Col>

          <Col span={9} offset={1}>
            <ProductDetail />
          </Col>

          <Col span={2} offset={2}>
            <ProductBrand />
          </Col>
        </Row>

        <Divider orientation="left">Reviews</Divider>

        <Row className="contaiter-comment">
          <Row>
            <CommentList />
          </Row>
          <Row>
            <CommentList />
          </Row>
          <Row>
            <CommentList />
          </Row>
          <Row type="flex" justify="end">
            <ProductPagination />
          </Row>
        </Row>

        <Divider orientation="left">You may also like</Divider>

        <Row type="flex" justify="space-between" gutter={20}>
          <Col span={3}>
            <ProductSimilar />
          </Col>

          <Col span={3}>
            <ProductSimilar />
          </Col>

          <Col span={3}>
            <ProductSimilar />
          </Col>

          <Col span={3}>
            <ProductSimilar />
          </Col>

          <Col span={3}>
            <ProductSimilar />
          </Col>

          <Col span={3}>
            <ProductSimilar />
          </Col>

          <Col span={3}>
            <ProductSimilar />
          </Col>

          <Col span={3}>
            <ProductSimilar />
          </Col>
        </Row>
      </Content>

      <FooterCustomer />
    </div>
  );
}

export default ProductInfo;
