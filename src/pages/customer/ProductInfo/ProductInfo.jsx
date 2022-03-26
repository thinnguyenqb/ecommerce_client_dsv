import React, { useState, useEffect } from "react";
import { Col, Row, Layout, Divider, Pagination } from "antd";
import { CommentList } from "../../../components/customer/ReviewList/ReviewList";
import { ProductBrand } from "../../../components/customer/ProductBrand/ProductBrand";
import { ProductImage } from "../../../components/customer/ProductImage/ProductImage";
import { ProductSimilar } from "../../../components/customer/ProductSimilar/ProductSimilar";
import { ProductDetail } from "../../../components/customer/ProductDetail/ProductDetail";
import { Header } from "../../../components/sharedComponent/Header/Header";
import { BreadcrumbMain } from "../../../components/customer/BreadcrumbMain/BreadcrumbMain";
import { FooterCustomer } from "../../../components/sharedComponent/Footer/Footer";
import "./ProductInfo.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AddReview } from './../../../components/customer/AddReview/AddReview';
import { useSelector } from 'react-redux';
// import { useQuery } from '@apollo/client';
// import { GET_PRODUCT_BY_ID } from "../../../graphql-client/queries";

const initialState = {
  reviews: [],
  totalPage: 0,
  current: 1,
  minIndex: 0,
  maxIndex: 0
}

const pageSize = 3;

function ProductInfo() {
  const { Content } = Layout;
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({})
  const auth = useSelector((state) => state.auth)
  const [pagination, setPagination] = useState(initialState) 

  const { reviews, current, minIndex, maxIndex } = pagination

  // const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
  //   variables: {
  //     id: id
  //   }
  // })

  useEffect(() => {
    // if (loading) return <p>Loading products ...</p>
    // if (error) return <p>Error loading products</p>
    // setProductInfo(data.product)
    const getData = async () => {
      const res = await axios.get(process.env.REACT_APP_API_URL + `/product/${id}` )
      setProductInfo(res.data.product)
      setPagination({
        reviews: res.data.product.review,
        totalPage: res.data.product.review.length / pageSize,
        minIndex: 0,
        maxIndex: pageSize
      })
    }
    getData()
  }, [id]);

  const handleChange = (page) => {
    setPagination({
      ...pagination,
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize
    });
  };

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
          <BreadcrumbMain category={productInfo?.productCategory} kindCategory={productInfo?.productKindCategory} subCategory={productInfo?.productSubCategory?.[0]} productName={productInfo?.productName}/>
        </Row>
        
        <Row>
          <Col span={10}>
            <ProductImage productInfo={productInfo}/>
          </Col>

          <Col span={9} offset={1}>
            <ProductDetail productInfo={productInfo} productId={id}/>
          </Col>

          <Col span={2} offset={2}>
            <ProductBrand />
          </Col>
        </Row>

        <Divider orientation="left">Reviews</Divider>
        
        <Row className="contaiter-comment">
          <Row >
            <Col flex="193px" style={{fontWeight: "500"}}>
              You
            </Col>
            <Col flex="auto" className="form-review">
              <AddReview productId={id} userId={auth.user._id} pagination={pagination} setPagination={setPagination}/>
            </Col>
          </Row>

          {reviews?.slice(0)?.reverse()?.map((item, index) =>
              index >= minIndex &&
              index < maxIndex && (
                <Row key={item.id}>
                  <CommentList item={item}/>
                </Row>
              )
          )}
          <Row type="flex" justify="end" style={{marginTop: "10px"}}>
            <Pagination
              pageSize={pageSize}
              current={current}
              total={reviews.length}
              onChange={handleChange}
              style={{ bottom: "0px" }}
            />
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
