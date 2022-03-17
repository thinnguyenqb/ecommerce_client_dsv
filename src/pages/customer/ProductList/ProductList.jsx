import React from "react";
import { Col, Row, Layout, Divider } from "antd";
import Product from "../../../components/customer/ProductCard/ProductCard";
import Fitler from "../../../components/customer/Filter/Filter";
import FilterCategory from "../../../components/customer/FilterCategory/FilterCategory";
import { Header } from "../../../components/sharedComponent/Header/Header";
import { FooterCustomer } from "../../../components/sharedComponent/Footer/Footer";
import { BreadcrumbMain } from "../../../components/customer/BreadcrumbMain/BreadcrumbMain";
import { Order } from "../../../components/customer/SortBy/SortBy";
import { ProductPagination } from "../../../components/customer/ProductPagination/ProductPagination";
import "./ProductList.scss";
import { useQuery } from "@apollo/client";
import {getProducts} from "../../../graphql-client/queries";

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

  const { loading, error, data } = useQuery(getProducts)
  if (loading) return <p>Loading books ...</p>
  if (error) return <p>Error loading books</p>

  console.log(data)
 
  return (
    <div className="product-list">
      <Header />

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
            <ProductPagination />
          </Col>
        </Row>

        <Row>
          <Col span={4}>
            <FilterCategory />
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
            <ProductPagination />
          </Col>
        </Row>
      </Content>

      <FooterCustomer />
    </div>
  );
}

export default ProductList;
