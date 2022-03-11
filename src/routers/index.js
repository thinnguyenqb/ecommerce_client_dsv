import React from 'react'
import { Switch , Route } from "react-router-dom";
import HomePage from './../pages/customer/homePage';
import ProductList from './../pages/customer/productList';
import ProductInfo from './../pages/customer/productInfo';

const Body = () => {
  return (
    <section>
      <Switch  >
        <Route path="/" exact component={HomePage}/>
        <Route path="/product-list" exact component={ProductList}/>
        <Route path="/product-info" exact component={ProductInfo}/>
      </Switch>
    </section>
  )
}

export default Body
