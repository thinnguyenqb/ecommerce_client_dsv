import React from "react";
import { Layout, Col, Row, Button } from "antd";
import Datapicker from "../../../components/seller/DatePicker/DatePicker";
import OrderTable from "../../../components/seller/OrderTable/OrderTable";
import HeaderSeller from "../../../components/seller/HeaderSeller/HeaderSeller";
import SideNav from "../../../components/seller/SiderLeft/SiderLeft";
import SearchSeller from "../../../components/seller/SearchSeller/SearchSeller";
import {DownloadOutlined} from '@ant-design/icons'
import "./Order.scss";

export function OrderPage() {
  const { Content } = Layout;
  return (
    <div className="order-page">
      <Content className="body-page">
        <Row>
          <Col span={3}>
            <SideNav />
          </Col>

          <Col span={21} className="container-content">
            <HeaderSeller />
            <Row className="container-header">
              <Col span={3} className="container-titler">
                ORDERED DATE
              </Col>
              <Col span={5} className="container-datapicker">
                <Datapicker />
              </Col>
              <Col span={3} className="container-btn">
                <Button className="btn-primary" type="primary">
                  Today
                </Button>
              </Col>
              <Col span={3} className="container-btn">
                <Button className="btn-primary" type="primary">
                  Yesterday
                </Button>
              </Col>
              <Col span={5} offset={2} className="container-search">
                <SearchSeller />
              </Col>
              <Col span={3} className="container-btn">
                <Button className="btn-primary" type="primary">
                  <DownloadOutlined style={{ fontSize: '120%'}} />
                  Export
                </Button>
              </Col>
            </Row>
            <Row className="container-table">
              <Col span={24}>
                <OrderTable />
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </div>
  );
}

export default OrderPage;
