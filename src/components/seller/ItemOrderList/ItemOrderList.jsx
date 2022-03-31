import * as React from "react";
import "./ItemOrderList.scss";
import {BsCircleFill} from 'react-icons/bs'



export function ItemOrderList({ orderItem }) {
  
  return (
    <div className="item-order-list">
      {
        orderItem.map((item, index) => (
          <div key={index}>
            - {item.productName} ({item.size}) - <BsCircleFill size="1rem" style={{color: `${item.color}`, marginBottom: '0px'}}/> x {item.quantity}
          </div>
        ))
      }
      
    </div>
  );
}

export default ItemOrderList;
