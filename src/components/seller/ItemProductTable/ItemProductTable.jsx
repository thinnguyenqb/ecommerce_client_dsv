import * as React from "react";
import "./ItemProductTable.scss";

export function ItemProductTable({ productItem }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="item-product-table">
      <img className="img-table-item" src={productItem?.productImage} alt="" />
      <div className="container-content">
        <div className="title">
          <p>{productItem?.productName}</p>
        </div>
        <div className="category">
          <p>
            {capitalizeFirstLetter(productItem?.productCategory)}, {" "}
            {capitalizeFirstLetter(productItem?.productKindCategory)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemProductTable;
