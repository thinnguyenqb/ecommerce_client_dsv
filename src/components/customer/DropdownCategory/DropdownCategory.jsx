import * as React from "react";
import { Card } from "antd";
import "./DropdownCategory.scss";
import { useDispatch } from 'react-redux';
import { productFilter } from "../../../redux/actions/productAction";
import { useHistory } from "react-router-dom";

export function DropdownCategory({ categoryName, categoryKind }) {
  const dispatch = useDispatch()
  const history = useHistory()

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const handleCategory = async (kind) => {
    const data = {
      category: categoryName, 
      kind: kind
    }
    await dispatch(productFilter(data))
    history.push(`/product-list?category=${categoryName}&kind=${kind}`)
  }
  return (
    <div>
        <Card className="sub-category">
          {categoryKind.map((item, index) => (
            <Card.Grid key={index} onClick={() => handleCategory(item.nameKindCategory)} >
              {capitalizeFirstLetter(item.nameKindCategory)}
            </Card.Grid>
          ))}
        </Card>
    </div>
  );
}

export default DropdownCategory;
