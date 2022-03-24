import * as React from "react";
import "./FilterCategory.scss";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export function FilterCategory({ category, kindCategory, itemSubCategory }) {
  // const data = [
  //   "Rompers / Jumpsuits",
  //   "Casual dresses",
  //   "Going out dresses",
  //   "Party / Ocassion dresses",
  //   "Mini dresses",
  //   "Maxi / Midi dresses",
  //   "Sets",
  // ];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="category-fitler">
      <Menu
        defaultSelectedKeys={["0"]}
        defaultOpenKeys={["sub1"]}
        mode="vertical"
        theme="light"
      >
        <Menu.Item key="0">
          <Link
            to={`/product-list?category=${category}&kind=${kindCategory}`}
            className="link-hover"
          >
            All {capitalizeFirstLetter(kindCategory)}
          </Link>
        </Menu.Item>
        {itemSubCategory.map((item, index) => (
          <Menu.Item key={index + 1}>
            <Link to={`/product-list?category=${category}&kind=${kindCategory}&sub=${item}`}>
              {item}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
      {/* <List
        size="small"
        header={<div>All dresses</div>}
        dataSource={itemSubCategory}
        renderItem={(item) => <Link to="/">
          <List.Item>{item}</List.Item>
        </Link>}
      /> */}
    </div>
  );
}

export default FilterCategory;
