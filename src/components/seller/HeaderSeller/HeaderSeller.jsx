import * as React from "react";
import "./HeaderSeller.scss";
import { Col, Row, Avatar, Badge } from "antd";
import { MailOutlined, BellOutlined } from "@ant-design/icons";

export function HeaderSeller() {
  return (
    <div className="header-seller">
      <Col span={6} className="txt-primary">
        Orders
      </Col>
      <Col span={6} offset={12}>
        <Row>
          <Col span={4}>
            <Avatar
              className="avt-seller"
              src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"
            />
          </Col>
          <Col span={10} className="name">
            Lucile Bush
          </Col>
          <Col span={5} className="container-badge">
            <Badge count={100} overflowCount={9}>
              <span className="container-icon">
                <MailOutlined />
              </span>
            </Badge>
          </Col>
          <Col span={5} className="container-badge">
            <Badge count={100} overflowCount={9}>
              <span className="container-icon">
                <BellOutlined />
              </span>
            </Badge>
          </Col>
        </Row>
      </Col>
    </div>
  );
}

export default HeaderSeller;
