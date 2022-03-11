import React from "react";
import { Col, Row, Layout, Divider } from "antd";
import { CommentCustomer } from "./commentCustomer";
import { FromBrand } from "./fromBrand";
import { ImageProduct } from "./imageProduct";
import { SimilarProduct } from "./similarProduct";
import { InfoProduct } from "./infoProduct";
import { HeaderCustomer } from "./../../../components/headerCustomer/headerCustomer";
import { BreadcrumbMain } from "./../../../components/breadcrumbMain/breadcrumbMain";
import { FooterCustomer } from "./../../../components/footerCustomer/footerCustomer";
import { PaginationCustomer } from "./../../../components/paginationCustomer/paginationCustomer";
import "./styles.scss";

function ProductInfo() {
  const { Content } = Layout;
  return (
    <div className="product-info">
      <HeaderCustomer />

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
            <ImageProduct />
          </Col>

          <Col span={9} offset={1}>
            <InfoProduct />
          </Col>

          <Col span={2} offset={2}>
            <FromBrand />
          </Col>
        </Row>

        <Divider orientation="left">Reviews</Divider>

        <Row className="contaiter-comment">
          <Row>
            <CommentCustomer />
          </Row>
          <Row>
            <CommentCustomer />
          </Row>
          <Row>
            <CommentCustomer />
          </Row>
          <Row type="flex" justify="end">
            <PaginationCustomer />
          </Row>
        </Row>

        <Divider orientation="left">You may also like</Divider>

        <Row type="flex" justify="space-between" gutter={20}>
          <Col span={3}>
            <SimilarProduct />
          </Col>

          <Col span={3}>
            <SimilarProduct />
          </Col>

          <Col span={3}>
            <SimilarProduct />
          </Col>

          <Col span={3}>
            <SimilarProduct />
          </Col>

          <Col span={3}>
            <SimilarProduct />
          </Col>

          <Col span={3}>
            <SimilarProduct />
          </Col>

          <Col span={3}>
            <SimilarProduct />
          </Col>

          <Col span={3}>
            <SimilarProduct />
          </Col>
        </Row>
      </Content>

      <FooterCustomer />
    </div>
  );
}

export default ProductInfo;
