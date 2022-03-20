import React, { useState, useEffect } from "react";
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
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_BY_ID } from "../../../graphql-client/queries";


function ProductInfo() {
  const { Content } = Layout;
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({})

  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      id: id
    }
  })

  useEffect(() => {
    if (loading) return <p>Loading products ...</p>
    if (error) return <p>Error loading products</p>
    setProductInfo(data.product)
  }, [loading, error, data]);

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
            <ProductImage productInfo={productInfo}/>
          </Col>

          <Col span={9} offset={1}>
            <ProductDetail productInfo={productInfo}/>
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