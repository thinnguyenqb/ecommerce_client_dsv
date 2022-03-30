import React from "react";
import { Input, message } from 'antd';
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productFilter } from "../../../redux/actions/productAction";
import "./Search.scss";

export function Search() {
  const { Search } = Input;
  const location = useLocation()
  const history = useHistory();
  const dispatch = useDispatch()
  let query = new URLSearchParams(location.search)
  const kindCategory = query.get("kind")
  const subCategory = query.get("sub")
  const category = query.get("category")
  const sort = query.get("sort")
  const order = query.get("order")
  const page = query.get("page")
  const perPage = query.get("perPage")

  //console.log(search)
  const handleSearch = async (value) => {
    const data = {
      category,
      kind: kindCategory,
      sub: subCategory,
      sort,
      order,
      page,
      perPage,
      search: value
    }
    
    if (!category) {
      message.info({
        content: "Please select the product category to search!",
        style: {
          marginTop: '4vh',
        },
      });
    } else {
      await dispatch(productFilter(data))

    let queryURL = "/product-list?"
    if (category) {
      queryURL = queryURL + `category=${category}`
    }
    if (kindCategory) {
      queryURL = queryURL + `&kind=${kindCategory}`
    }
    if (subCategory) {
      queryURL = queryURL + `&sub=${subCategory}`
    }
    if (sort) {
      queryURL = queryURL + `&sort=${sort}`
    }
    if (order) {
      queryURL = queryURL + `&order=${order}`
    }
    if (page) {
      queryURL = queryURL + `&page=${page}`
    }
    if (perPage) {
      queryURL = queryURL + `&perPage=${perPage}`
    }
    history.push(queryURL + `&search=${value}`)
    }
  }

  return (
    <div className="search-customer">
      <Search
        placeholder="Search"
        onSearch={value => handleSearch(value)}
      />
    </div>
  );

}

export default Search