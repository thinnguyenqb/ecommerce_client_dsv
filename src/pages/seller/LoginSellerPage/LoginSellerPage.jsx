import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

import "./LoginSellerPage.scss";
import { LoginSeller } from './../../../components/seller/LoginSeller/LoginSeller';

export function LoginSellerPage() {
  return (
    <div className="login__seller">
      <Link to="/">
        <Avatar
          shape="square"
          className="logo"
          src="https://res.cloudinary.com/ericnguyen-cop/image/upload/v1647529034/Ecommerce/ooqkbyh5xeuc5umyue8k.png"
        />
      </Link>
      <LoginSeller />
    </div>
  );
}

export default LoginSellerPage;
