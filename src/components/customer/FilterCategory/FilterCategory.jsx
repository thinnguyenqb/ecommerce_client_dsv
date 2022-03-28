import * as React from "react";
import "./FilterCategory.scss";
import { Menu } from "antd";
import { useDispatch } from "react-redux";
import { productFilter } from "../../../redux/actions/productAction";
import { useHistory } from "react-router-dom";

export function FilterCategory({ category, kindCategory, itemSubCategory }) {

  const dispatch = useDispatch();
  const history = useHistory();
  
  ///product-list?category=${category}&kind=${kindCategory}&sub=${item}
  const handleSubCategory = async (item) => {
    const data = {
      category: category,
      kind: kindCategory,
      sub: item
    }
    await dispatch(productFilter(data))
    if (item) {
      history.push(`/product-list?category=${category}&kind=${kindCategory}&sub=${item}`)
    } else {
      history.push(`/product-list?category=${category}&kind=${kindCategory}`)
    }
  }

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
        <Menu.Item key="0" onClick = {() => handleSubCategory()}>
          All {capitalizeFirstLetter(kindCategory)}
        </Menu.Item>
        {itemSubCategory.map((item, index) => (
          <Menu.Item key={index + 1} onClick = {() => handleSubCategory(item)}>
              {item}
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
