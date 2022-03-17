import * as React from "react";
import { Input } from 'antd';

import "./SearchSeller.scss";

export function SearchSeller() {
  const { Search } = Input;

  return (
    <div className="search-seller">
      <Search
        placeholder="Search"
        onSearch={value => console.log(value)}
      />
    </div>
  );

}

export default SearchSeller