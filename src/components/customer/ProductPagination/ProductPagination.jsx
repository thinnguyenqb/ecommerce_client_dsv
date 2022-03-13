import * as React from "react";

import "./ProductPagination.scss";
import { Pagination } from 'antd'

export function ProductPagination() {
  return (
    <div className="pagination-customer">
        <Pagination simple defaultCurrent={2} total={50} />
    </div>
  );
}

export default ProductPagination
