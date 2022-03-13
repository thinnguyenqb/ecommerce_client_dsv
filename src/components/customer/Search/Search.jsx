import * as React from "react";
import { Input } from 'antd';

import "./Search.scss";

export function Search() {
  const { Search } = Input;

  return (
    <div className="search-customer">
      <Search
        placeholder="Search"
        onSearch={value => console.log(value)}
      />
    </div>
  );

}

export default Search