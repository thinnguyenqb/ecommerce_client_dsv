import React from 'react'
import { Switch , Route } from "react-router-dom";
import HomePage from '../pages/customer/HomePage/HomePage';
import ProductList from '../pages/customer/ProductList/ProductList';
import ProductInfo from '../pages/customer/ProductInfo/ProductInfo';
import Profile from '../pages/customer/Profile/Profile';
import ShoppingCart from './../pages/customer/ShoppingCart/ShoppingCart';
import LoginSellerPage from '../pages/seller/LoginSellerPage/LoginSellerPage';
import OrderPage from './../pages/seller/Order/Order';

const Body = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/product-list" exact>
            <ProductList />
        </Route>
        <Route path="/product-info/:id" exact component={ProductInfo}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/shopping-cart" exact component={ShoppingCart} />
        
        <Route exact path='/seller/login' component={LoginSellerPage} />
        <Route exact path='/seller/order' component={OrderPage} />
      </Switch>
    </section>
  )
}

export default Body
