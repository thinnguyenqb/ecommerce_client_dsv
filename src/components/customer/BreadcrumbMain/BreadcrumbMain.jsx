import * as React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import "./BreadcrumbMain.scss";

export function BreadcrumbMain({ category, kindCategory, subCategory }) {
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
        <Breadcrumb.Item>{upperCaseFirstLetter(category)}</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href="">{upperCaseFirstLetter(kindCategory)}</Link>
        </Breadcrumb.Item>
        {
          subCategory &&
          <Breadcrumb.Item>
            <Link href="">{upperCaseFirstLetter(subCategory)}</Link>
          </Breadcrumb.Item>
        }
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbMain;
