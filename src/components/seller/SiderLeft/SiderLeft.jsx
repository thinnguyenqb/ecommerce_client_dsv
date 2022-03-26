import React from "react";
import { Link } from "react-router-dom";
import { Menu, Avatar } from "antd";
import {
  BarChartOutlined, ShoppingCartOutlined, UnorderedListOutlined, DollarOutlined,
  TagOutlined, SettingOutlined
} from "@ant-design/icons"
import "./SiderLeft.scss";

export function SideNav() {
  const { SubMenu } = Menu;

  return (
    <div className="side-nav">
      <div className="container-logo">
        <Link to="/">
          <Avatar
            shape="square"
            className="logo"
            src="https://res.cloudinary.com/ericnguyen-cop/image/upload/v1647529034/Ecommerce/ooqkbyh5xeuc5umyue8k.png"
          />
        </Link>
      </div>

      <Menu
        className="menu-seller"
        defaultSelectedKeys={["2"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <Menu.Item key="1">
          <BarChartOutlined style={{ fontSize: '150%'}}/>
          <span>Overview</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/seller/order">
            <ShoppingCartOutlined style={{ fontSize: '150%'}}/>
            <span>Orders</span>
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <UnorderedListOutlined style={{ fontSize: '150%'}}/>
              <span>Products</span>
            </span>
          }
        >
          <Link to="/seller/product-manage">
            <Menu.Item key="3">Main</Menu.Item>
          </Link>
          <Link to="/seller/product-add">
            <Menu.Item key="4">Add</Menu.Item>
          </Link>
        </SubMenu>
        <Menu.Item key="5">
          <DollarOutlined style={{ fontSize: '150%'}}/>
          <span>Payments</span>
        </Menu.Item>
        <Menu.Item key="6">
          <TagOutlined style={{ fontSize: '150%'}}/>
          <span>Promotions</span>
        </Menu.Item>
        <Menu.Item key="7">
        <SettingOutlined style={{ fontSize: '150%'}}/>
          <span>Setting</span>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default SideNav;
