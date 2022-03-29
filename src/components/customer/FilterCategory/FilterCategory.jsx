import React, {useState, useEffect} from "react";
import "./FilterCategory.scss";
import { Menu } from "antd";
import { useDispatch } from "react-redux";
import { productFilter } from "../../../redux/actions/productAction";
import { useHistory } from "react-router-dom";

export function FilterCategory({ category, kindCategory, subCategory, itemSubCategory }) {
  const [selectActive, setSelectActive] = useState("0")
  const dispatch = useDispatch();
  const history = useHistory();
  
  ///product-list?category=${category}&kind=${kindCategory}&sub=${item}
  const handleSubCategory = async (item, index) => {
    const data = {
      category: category,
      kind: kindCategory,
      sub: item
    }
    await dispatch(productFilter(data))
    setSelectActive(`${index}`)
    if (item) {
      history.push(`/product-list?category=${category}&kind=${kindCategory}&sub=${item}`)
    } else {
      history.push(`/product-list?category=${category}&kind=${kindCategory}`)
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    if (!subCategory) {
      setSelectActive("0")
    }
  }, [subCategory])

  return (
    <div className="category-fitler">
      <Menu
        defaultSelectedKeys={[selectActive]}
        selectedKeys={[selectActive]}
        mode="vertical"
        theme="light"
      >
        <Menu.Item key="0" onClick = {() => handleSubCategory()}>
          All {capitalizeFirstLetter(kindCategory)}
        </Menu.Item>
        {itemSubCategory.map((item, index) => (
          <Menu.Item key={index + 1} onClick = {() => handleSubCategory(item, index + 1)}>
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
