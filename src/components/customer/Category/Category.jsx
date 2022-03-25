import React from "react";
import { Dropdown } from 'antd'
import { DropdownCategory } from '../DropdownCategory/DropdownCategory';
import "./Category.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';


export function Category() {
  const category = useSelector((state) => state.category);
  const { items } = category;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="category">
      {
        items.map((category) => (
          <Dropdown
            overlay={<DropdownCategory categoryName={category.categoryName} categoryKind={category.categoryKind} />}
            placement="bottomCenter" key={category._id}>
            <div className="container-item">
              <div className="item-category">
                <p>{capitalizeFirstLetter(category.categoryName)}</p>
                <span className="container-icon">
                  <FontAwesomeIcon className="icon-category" icon={faAngleDown} />
                </span>
              </div>
            </div>
          </Dropdown>
        ))
      }
    </div>
  );

}

export default Category