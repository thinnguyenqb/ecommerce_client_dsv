import React from "react";
import "./SortBy.scss";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { productFilter } from "../../../redux/actions/productAction";
import { useHistory } from "react-router-dom";

export function SortBy({ kindCategory, subCategory, category, search }) {
  const { Option } = Select;

  const dispatch = useDispatch()
  const history = useHistory()
  
  const onChange = async (value) => {
    const sort = value.split(',')[0]
    const order = value.split(',')[1]
    const data = {
      category: category,
      kind: kindCategory,
      sub: subCategory,
      search: search,
      sort: sort,
      order: order
    }
    await dispatch(productFilter(data))
    if (subCategory) {
      history.push(`/product-list?category=${category}&kind=${kindCategory}&sub=${subCategory}&sort=${sort}&order=${order}`)
    } else {
      history.push(`/product-list?category=${category}&kind=${kindCategory}&sort=${sort}&order=${order}`)
    }
  };

  return (
    <div className="order">
      <span>Sort By: </span>
      <Select defaultValue="productName,ASC" bordered={false} onChange={onChange}>
        {/* <Option value="Popularity">Popularity</Option> */}
        <Option value="productName,ASC">Name: A - Z</Option>
        <Option value="productName,DESC">Name: Z - A</Option>
        <Option value="productPrice,ASC">
          Price: lowest to highest
        </Option>
        <Option value="productPrice,DESC">
          Price: highest to lowest
        </Option>
      </Select>
    </div>
  );
}

export default SortBy;
