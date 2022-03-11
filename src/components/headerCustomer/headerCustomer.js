import React, { useState } from "react";
import {
  AccountCustomer,
  Cart,
  Category,
  BtnLogin,
} from "./components";
import "./headerCustomer.scss";
import { Avatar, Button, Input } from "antd";
import { Link } from "react-router-dom";
import { LoginCustomer, Register, ForgotPassword } from "../index";

const { Search } = Input;

export function HeaderCustomer() {
  const [isLogin, setIsLogin] = useState(false);
  const [isShowModalLogin, setShowModalLogin] = useState(false);
  const [isShowModalRegister, setShowModalRegister] = useState(false);
  const [isShowModalForgotPassword, setShowModalForgotPassword] = useState(false);

  const showModalLogin = () => {
    setShowModalLogin(true);
    setShowModalRegister(false);
    setShowModalForgotPassword(false);
  };

  const handleOkLogin = (e) => {
    setShowModalLogin(false);
    setIsLogin(true);
  };

  const handleCancelLogin = (e) => {
    setShowModalLogin(false);
  };

  const showModalRegister = () => {
    setShowModalRegister(true);
    setShowModalLogin(false);
    setShowModalForgotPassword(false);
  };

  const handleOkRegister = (e) => {
    setShowModalRegister(false);
  };

  const handleCancelRegister = (e) => {
    setShowModalRegister(false);
  };

  const showModalForgotPassword = () => {
    setShowModalForgotPassword(true);
    setShowModalRegister(false);
    setShowModalLogin(false);
  };

  const handleOkForgotPassword = (e) => {
    setShowModalForgotPassword(false);
  };

  const handleCancelForgotPassword = (e) => {
    setShowModalForgotPassword(false);
  };

  return (
    <div className="header-customer">
      <LoginCustomer
        visible={isShowModalLogin}
        onOk={handleOkLogin}
        onCancel={handleCancelLogin}
        showModalRegister={showModalRegister}
        showModalForgotPassword={showModalForgotPassword}
      />

      <Register
        visible={isShowModalRegister}
        onOk={handleOkRegister}
        onCancel={handleCancelRegister}
        showModalLogin={showModalLogin}
      />

      <ForgotPassword
        visible={isShowModalForgotPassword}
        onOk={handleOkForgotPassword}
        onCancel={handleCancelForgotPassword}
        showModalLogin={showModalLogin}
      />

      <div className="top">
        <div className="left">
          {/* <SearchCustomer className="search-customer" /> */}
          <Search placeholder="Search..." style={{ width: 200 }} />
        </div>

        <div className="center">
          <Link to="/">
            <Avatar
              shape="square"
              className="logo"
              src="https://i.imgur.com/QUUigZo.png"
            />
          </Link>
        </div>

        <div className="right">
          {isLogin && <AccountCustomer className="account-customer" />}

          {!isLogin && (
            <div className="log-in">
              <Button type="link" ghost onClick={showModalRegister}>
                Register
              </Button>

              <BtnLogin className="btn-login" showModal={showModalLogin} />
            </div>
          )}

          <Link to="/shopping-cart">
            <Cart className="cart" />
          </Link>
        </div>
      </div>

      <div className="bottom">
        <Category />
      </div>
    </div>
  );
}

export default HeaderCustomer;