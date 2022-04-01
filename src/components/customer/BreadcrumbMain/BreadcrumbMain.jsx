import * as React from "react";
import { Breadcrumb } from "antd";
import "./BreadcrumbMain.scss";

export function BreadcrumbMain({ category, kindCategory, subCategory, productName }) {
  const upperCaseFirstLetter = (str) => {
    const arr = str.split(" ");
    //loop through each element of the array and capitalize the first letter.
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    //Join all the elements of the array back into a string
    //using a blankspace as a separator
    const str2 = arr.join(" ");
    return str2;
  };
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>{category ? upperCaseFirstLetter(category) : ""}</Breadcrumb.Item>
        <Breadcrumb.Item>
          {kindCategory ? upperCaseFirstLetter(kindCategory) : ""}
        </Breadcrumb.Item>
        {
          subCategory ?
          <Breadcrumb.Item>
            {upperCaseFirstLetter(subCategory)}
            </Breadcrumb.Item>
            : ""
        }
        {
          productName ?
          <Breadcrumb.Item>
            {upperCaseFirstLetter(productName)}
            </Breadcrumb.Item>
            : ""
        }
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbMain;
