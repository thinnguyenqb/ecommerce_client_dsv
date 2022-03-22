import React, { useEffect } from "react";
import { Dropdown } from 'antd'
import { DropdownCategory } from '../DropdownCategory/DropdownCategory';
import "./Category.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useSelector,useDispatch } from 'react-redux';
import { getCategory } from "../../../redux/actions/categoryAction";


export function Category() {
  const dispatch = useDispatch()
  const category = useSelector((state) => state.category);
  const { items } = category;

  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch]);


  return (
    <div className="category">
      {
        items.map((category) => (
          <Dropdown
            overlay={<DropdownCategory categoryName={category.categoryName} categoryKind={category.categoryKind} />}
            placement="bottomCenter" key={category._id}>
            <div className="container-item">
              <div className="item-category">
                <p>{category.categoryName}</p>
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