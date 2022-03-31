import * as React from "react";
import "./HeaderSeller.scss";
import { Col, Row, Avatar, Badge, Dropdown, Button, Menu } from "antd";
import { MailOutlined, BellOutlined } from "@ant-design/icons";
import { useSelector } from 'react-redux';

export function HeaderSeller({ title, subTitle }) {
  const auth = useSelector((state) => state.auth)
  
  const menu = (
    <Menu>
      <Menu.Item>
        <Button
          type="text"
          // onClick={handleLogout}
          >Logout
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="header-seller">
      <Col span={6} className="txt-primary">
        {title}
        <span style={{display: "block", fontSize: '14px', fontWeight: '500'}}>
          {subTitle}
        </span>
      </Col>
      <Col span={6} offset={12}>
        <Row>
          <Col span={4}>
            <Dropdown overlay={menu} placement="bottomRight">
              <Avatar src={auth.user.avatar} className="avt-seller"/>
            </Dropdown>
          </Col>
          <Col span={10} className="name">
          {auth.user.name}
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
