import React from 'react'
import { Switch, Route } from "react-router-dom";
import HomePage from './../pages/customer/homePage';

const Body = () => {
  return (
    <section>
      <Switch >
        <Route path="/" exact component={HomePage}/>
      </Switch>
    </section>
  )
}

export default Body
