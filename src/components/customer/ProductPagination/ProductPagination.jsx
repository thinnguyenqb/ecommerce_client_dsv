import React, {useEffect} from "react";
import "./ProductPagination.scss";
import { Pagination } from 'antd'
import { useDispatch, useSelector } from "react-redux";
import { productFilter } from "../../../redux/actions/productAction";

export function ProductPagination({ kindCategory, subCategory, category, search, sort, order }) {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product)
  const {totalPage} = product

  const onChange = async (value) => {
    const data = {
      category,
      kind: kindCategory,
      sub: subCategory,
      search: search,
      sort,
      order,
      page: value,
      perPage: 8
    }
    await dispatch(productFilter(data))
    //history.push(`/product-list?category=${category}&kind=${kindCategory}&sub=${subCategory}&sort=${sort}&order=${order}`)
  }

  useEffect(() => {

  }, [totalPage]);

  return (
    <div className="pagination-customer">
      <Pagination simple defaultCurrent={1} total={totalPage} onChange={onChange}/>
    </div>
  );
}

export default ProductPagination
