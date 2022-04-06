import React from "react";
import { Layout, Col, Row, Button, Select } from "antd";
import HeaderSeller from "../../../components/seller/HeaderSeller/HeaderSeller";
import SideNav from "../../../components/seller/SiderLeft/SiderLeft";
import SearchSeller from "../../../components/seller/SearchSeller/SearchSeller";
import { ProductTable } from "../../../components/seller/ProductTable/ProductTable";
import "./ProductManage.scss";
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCT } from "../../../graphql-client/product/queries";

export function ProductManage() {
  const { Content } = Layout;
  const { Option } = Select;
  const { data } = useQuery(GET_ALL_PRODUCT)
  const history = useHistory()
  
  return (
    <div className="product-main-page">
      <Content className="body-page">
        <Row>
          <Col span={4} className="container-side-nav">
            <SideNav selectDefault="3" />
          </Col>

          <Col span={20} className="container-content">
            <HeaderSeller namePage="Products" title={"Products"} />
            <Row className="container-header">
              <Col span={2} className="container-titler">
                SORT BY
              </Col>
              <Col span={4} className="container-select">
                <Select defaultValue="Popularity" bordered={false}>
                  <Option value="Popularity">Popularity</Option>
                  <Option value="Name: A - Z">Name: A - Z</Option>
                  <Option value="Price: lowest to highest">Price: lowest to highest</Option>
                  <Option value="Price: highest to lowest">Price: highest to lowest</Option>
                </Select>
              </Col>
              <Col span={5} offset={6} className="container-search">
                <SearchSeller />
              </Col>
              <Col span={3} className="container-btn">
                <Button
                  style={{ backgroundColor: "#ffa15f", color: "white" }}
                  className="btn-primary"
                  type="primary"
                  onClick={() => history.push("/seller/product-add")}
                >
                  Add product
                </Button>
              </Col>
              <Col span={4} className="container-btn">
                <Button
                  style={{ color: "#ffa15f" }}
                  className="btn-primary"
                  type="primary"
                >
                  Export
                </Button>
              </Col>
            </Row>
            <Row className="container-table">
              <Col span={24}>
                <ProductTable product={data?.products} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </div>
  );
}

export default ProductManage;
