import React from 'react'
import { Switch , Route } from "react-router-dom";
import HomePage from '../pages/customer/HomePage/HomePage';
import ProductList from '../pages/customer/ProductList/ProductList';
import ProductInfo from '../pages/customer/ProductInfo/ProductInfo';
import Profile from '../pages/customer/Profile/Profile';
import ShoppingCart from './../pages/customer/ShoppingCart/ShoppingCart';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import LoginSellerPage from '../pages/seller/LoginSellerPage/LoginSellerPage';
import OrderPage from './../pages/seller/Order/Order';

const client = new ApolloClient({
  url: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
})

const Body = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/product-list" exact>
          <ApolloProvider client={client}>
            <ProductList />
          </ApolloProvider>
        </Route>
        <Route path="/product-info" exact component={ProductInfo}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/shopping-cart" exact component={ShoppingCart} />
        
        <Route exact path='/seller/login' component={LoginSellerPage} />
        <Route exact path='/seller/order' component={OrderPage} />
      </Switch>
    </section>
  )
}

export default Body
