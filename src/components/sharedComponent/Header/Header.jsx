import React, { useState } from "react";
import { Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import FromForgotPassword from '../../customer/FormForgotPassword/FormForgotPassword'
import FormRegister from '../../customer/FormRegister/FormRegister'
import AccountAvatar from '../../customer/AccountAvatar/AccountAvatar';
import FormLogin from '../../customer/FormLogin/FormLogin';
import { Cart } from '../../customer/Cart/Cart'
import {Search} from '../../customer/Search/Search'
import { Category } from '../../customer/Category/Category';
import { BtnLogin } from '../../customer/BtnLogin/BtnLogin';
import "./Header.scss";
import { useSelector } from "react-redux";
import { useCart } from "react-use-cart";

export function Header() {
  const [isShowModalLogin, setShowModalLogin] = useState(false);
  const [isShowModalRegister, setShowModalRegister] = useState(false);
  const [isShowModalForgotPassword, setShowModalForgotPassword] = useState(false);
  const auth = useSelector((state) => state.auth);
  const { user, isLogged } = auth;
  const { totalUniqueItems, items } = useCart();

  const showModalLogin = () => {
    setShowModalLogin(true);
    setShowModalRegister(false);
    setShowModalForgotPassword(false);
  };

  const handleOkLogin = (e) => {
    setShowModalLogin(false);
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
      <FormLogin
        visible={isShowModalLogin}
        onOk={handleOkLogin}
        onCancel={handleCancelLogin}
        showModalRegister={showModalRegister}
        showModalForgotPassword={showModalForgotPassword}
      />

      <FormRegister
        visible={isShowModalRegister}
        onOk={handleOkRegister}
        onCancel={handleCancelRegister}
        showModalLogin={showModalLogin}
      />

      <FromForgotPassword
        visible={isShowModalForgotPassword}
        onOk={handleOkForgotPassword}
        onCancel={handleCancelForgotPassword}
        showModalLogin={showModalLogin}
      />

      <div className="top">
        <div className="left">
          <Search />
        </div>

        <div className="center">
          <Link to="/">
            <Avatar
              shape="square"
              className="logo"
              src="https://res.cloudinary.com/ericnguyen-cop/image/upload/v1647529034/Ecommerce/ooqkbyh5xeuc5umyue8k.png"
            />
          </Link>
        </div>

        <div className="right">
          {isLogged ? (
              <AccountAvatar className="account-customer" user={user}/>
          ) : (
            <div className="log-in">
              <Button type="link" ghost onClick={showModalRegister}>
                Register
              </Button>
              <BtnLogin className="btn-login" showModal={showModalLogin} />
            </div>
          )
        }
          <Link to="/shopping-cart">
            <Cart
              className="cart"
              totalUniqueItems={totalUniqueItems}
              items={items}
            />
          </Link>
        </div>
      </div>

      <div className="bottom">
        <Category />
      </div>
    </div>
  );
}

export default Header;
