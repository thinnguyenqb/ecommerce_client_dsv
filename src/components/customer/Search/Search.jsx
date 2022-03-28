import React, { useState } from "react";
import { Input } from 'antd';
import { useHistory, useLocation, useParams } from "react-router-dom";

import "./Search.scss";

export function Search() {
  const { Search } = Input;
  //const [search, setSearch] = useState("")
  const location = useLocation()
  const { search } = useParams()
  let query = new URLSearchParams(location.search)
  const history = useHistory();

  console.log(search)
  const handleSearch = (value) => {
    let searchPath = "";
    if (query.get("category")) {
      searchPath =searchPath + `&${query.get("category") }`
    }

    if(location.search)
      history.push(location.pathname + `?`
        + `${query?.get("category")}`
        + query?.get("kind")
        + query?.get("sub")
        + query?.get("page")
        + query?.get("perPage")
        + query?.get("sort")
        + query?.get("order")
        + query?.get("size")
        + query?.get("price")
        + query?.get("perPrice")
        + `&search=${value}`
      )
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