import * as React from "react";
import { Card } from "antd";
import "./DropdownCategory.scss";
import { Link } from "react-router-dom";

export function DropdownCategory({ categoryName, categoryKind }) {
  return (
    <div>
        <Card className="sub-category">
          {categoryKind.map((item, index) => (
            <Card.Grid key={index}>
              <Link to={`/product-list/${categoryName.toLowerCase()}?kind=${item.nameKindCategory.toLowerCase()}`} className="link-sub-category">
              {item.nameKindCategory}
               </Link>
            </Card.Grid>
          ))}
        </Card>
    </div>
  );
}

export default DropdownCategory;
