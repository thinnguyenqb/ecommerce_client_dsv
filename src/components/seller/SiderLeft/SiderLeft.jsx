import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Menu, Avatar } from "antd";
import {
  BarChartOutlined, ShoppingCartOutlined, DollarOutlined,
  TagOutlined, SettingOutlined, TableOutlined, PlusCircleOutlined
} from "@ant-design/icons"
import "./SiderLeft.scss";


export function SideNav() {

  const history = useHistory()

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
        mode="inline"
      >
        <Menu.Item key="1">
          <BarChartOutlined style={{ fontSize: '150%'}}/>
          <span>Overview</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => history.push('/seller/order')}>
            <ShoppingCartOutlined style={{ fontSize: '150%'}}/>
            <span>Orders</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={() => history.push('/seller/product-manage')}>
            <TableOutlined style={{ fontSize: '150%'}}/>
            <span>Products</span>
        </Menu.Item>
        <Menu.Item key="4" onClick={() => history.push('/seller/product-add')}>
            <PlusCircleOutlined style={{ fontSize: '150%'}}/>
            <span>Add Product</span>
        </Menu.Item>
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
