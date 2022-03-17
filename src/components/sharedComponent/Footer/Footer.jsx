import * as React from "react";
import { Link } from "react-router-dom"

import "./Footer.scss";
import { Avatar, Divider } from 'antd'
import { TwitterOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons'

export function FooterCustomer() {

  return (
    <div className="footer-customer">
      <Divider className="divider-footer-customer"/>
      <div className="container-footer-customer">
        <div className="top">
          <div className="left">
            <Link to="/"><Avatar shape="square" className="logo" src="https://res.cloudinary.com/ericnguyen-cop/image/upload/v1647529034/Ecommerce/ooqkbyh5xeuc5umyue8k.png" /></Link>
          </div>

          <div className="center">
            <ul className="ul">
              <li>Home</li>
              <li>Products</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Help</li>
              <li>Contacts</li>
            </ul>
          </div>

          <div className="right">
            <TwitterOutlined style={{fontSize: '2rem', marginRight: '15px'}}/>
            <FacebookOutlined style={{fontSize: '2rem', marginRight: '15px'}}/>
            <InstagramOutlined style={{fontSize: '2rem', marginRight: '15px'}}/>
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            <ul className="ul">
              <li className="start">Home</li>
              <li>Products</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Help</li>
              <li>Contacts</li>
            </ul>
          </div>

          <div className="right">
            <ul className="ul">
              <li>Privacy Policy</li>
              <li className="end">Term & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCustomer
