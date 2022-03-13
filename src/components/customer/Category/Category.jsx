import * as React from "react";
import { Dropdown } from 'antd'
import { DropdownCategory } from '../DropdownCategory/DropdownCategory';
import { ItemCategory } from '../ItemCategory/ItemCategory';
import "./Category.scss";

export function Category() {
  const subCategory = (
    <DropdownCategory />
  );

  return (
    <div className="category">
      <Dropdown overlay={subCategory} placement="bottomCenter">
        <div className="container-item">
          <ItemCategory className="item-category" />
          <ItemCategory className="item-category" />
          <ItemCategory className="item-category" />
          <ItemCategory className="item-category" />
          <ItemCategory className="item-category" />
        </div>
      </Dropdown>
    </div>
  );

}

export default Category