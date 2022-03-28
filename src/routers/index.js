import React from 'react'
import { Switch , Route } from "react-router-dom";
import HomePage from '../pages/customer/HomePage/HomePage';
import ProductList from '../pages/customer/ProductList/ProductList';
import ProductInfo from '../pages/customer/ProductInfo/ProductInfo';
import Profile from '../pages/customer/Profile/Profile';
import ShoppingCart from './../pages/customer/ShoppingCart/ShoppingCart';
import LoginSellerPage from '../pages/seller/LoginSellerPage/LoginSellerPage';
import OrderPage from './../pages/seller/Order/Order';
import ActiveEmailPage from './../pages/customer/ActiveEmailPage/ActiveEmailPage';
import { useSelector } from 'react-redux';
import ProductManage from './../pages/seller/ProductManage/ProductManage';
// import { ProductAdd } from './../pages/seller/AddProduct/AddProduct';

const Body = () => {
  const auth = useSelector(state => state.auth);

  return (
    <section>
      
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/user/activate/:activation_token" component={ActiveEmailPage} exact/>
        <Route path="/product-list" exact component={ProductList}/> 
        <Route path="/product-info/:id" exact component={ProductInfo}/>
        <Route path="/profile" exact component={auth.token && Profile}/>
        <Route path="/shopping-cart" exact component={ShoppingCart} />
      </Switch>
      <Switch>
        <Route exact path='/seller/login' component={LoginSellerPage} />
        <Route exact path='/seller/order' component={auth.user.role === 'seller' && OrderPage} />
        <Route exact path='/seller/product-manage' component={ProductManage}/>
        {/* <Route exact path='/seller/product-add' component={ProductAdd}/> */}
      </Switch>
    </section>
  )
}

export default Body
