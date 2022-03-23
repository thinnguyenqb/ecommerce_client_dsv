import * as React from "react";
import { Card } from "antd";
import "./DropdownCategory.scss";
import { Link } from "react-router-dom";

export function DropdownCategory({ categoryName, categoryKind }) {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
        <Card className="sub-category">
          {categoryKind.map((item, index) => (
            <Card.Grid key={index}>
              <Link to={`/product-list/${categoryName}?kind=${item.nameKindCategory}`} className="link-sub-category">
              {capitalizeFirstLetter(item.nameKindCategory)}
               </Link>
            </Card.Grid>
          ))}
        </Card>
    </div>
  );
}

export default DropdownCategory;
