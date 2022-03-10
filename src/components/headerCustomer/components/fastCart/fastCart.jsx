import * as React from "react"
import { Card } from 'antd'
import { Link } from "react-router-dom"

import "./fastCart.scss";
import ItemFastCart from '../itemFastCart/itemFastCart'

export function FastCart() {
  const gridStyle = {
    width: '100%',
    textAlign: 'center',
  };

  return (
    <div>
      <Card className="fast-cart">
        <Card.Grid style={gridStyle}>  <ItemFastCart /></Card.Grid>
        <Card.Grid style={gridStyle}>  <ItemFastCart /></Card.Grid>
        <Card.Grid style={gridStyle}>  <ItemFastCart /></Card.Grid>
        <Card.Grid style={gridStyle}> <div className="view-cart"><Link  to="/shopping-cart">View cart</Link></div> </Card.Grid>
      </Card>
    </div>
  );

}

export default FastCart