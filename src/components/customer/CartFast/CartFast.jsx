import * as React from "react"
import { Card } from 'antd'
import { Link } from "react-router-dom"
import ItemFastCart from '../ItemFastCart/ItemFastCart'
import "./CartFast.scss";

export function CartFast({items}) {
  const gridStyle = {
    width: '100%',
    textAlign: 'center',
  };

  return (
    <div>
      <Card className="fast-cart">
        {items.map(item => (
          <li key={item.id}>
            <Card.Grid style={gridStyle}>  <ItemFastCart item={item}/></Card.Grid>
          </li>
        ))}
        <Card.Grid style={gridStyle}> <div className="view-cart"><Link  to="/shopping-cart">View cart</Link></div> </Card.Grid>
      </Card>
    </div>
  );

}

export default CartFast