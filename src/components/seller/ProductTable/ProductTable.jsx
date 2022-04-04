import React from "react";
import { Table, Button, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import "./ProductTable.scss";
import { ItemProductTable } from "../ItemProductTable/ItemProductTable";
import { EditOutlined, DeleteOutlined, CaretDownOutlined } from "@ant-design/icons";

export function ProductTable({ product }) {
  const styleBtnEdit = {
    width: "100%",
    backgroundColor: "#ffa15f",
    border: "none",
  };

  const styleBtnRemove = {
    width: "100%",
    backgroundColor: "#ff5f6d",
    border: "none",
  };

  const columns = [
    {
      title: "PRODUCTS",
      dataIndex: "products",
      key: "products",
      render: (product) => <ItemProductTable productItem={product} />,
      width: 250,
    },
    {
      title: "SOLD",
      dataIndex: "sold",
      key: "sold",
      width: 80,
    },
    {
      title: "DATE ADDED",
      dataIndex: "dateAdded",
      key: "dateAdded",
      width: 150,
    },
    {
      title: "PROFIT($)",
      dataIndex: "profit",
      key: "profit",
      width: 150,
    },
    {
      title: "ACTION",
      dataIndex: "action",
      key: "action",
      render: (productId) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>
                <Link to={`/seller/product-add`}>
                  <Button
                    style={styleBtnEdit}
                    className="btn-action-product-table"
                    type="primary"
                  >
                    <EditOutlined />
                    Edit
                  </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Button
                  style={styleBtnRemove}
                  className="btn-action-product-table"
                  type="primary"
                >
                  <DeleteOutlined />
                  Remove
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <span className="ant-dropdown-link">
            Actions
            <CaretDownOutlined style={{marginLeft: "5px"}}/>
          </span>
        </Dropdown>
      ),
      width: 150,
    },
  ];

  let productList = product?.map((item) => {
    return {
      key: item?._id,
      products: {
        productImage: item?.productImageUrl[0],
        productName: item?.productName,
        productCategory: item?.productCategory,
        productKindCategory: item?.productKindCategory,
      },
      sold: `${item?.soldQuantity} / ${item?.soldQuantity + item?.quantity}`,
      dateAdded: moment(item?.updatedAt).format("LL"),
      profit: `$ ${Math.round(item?.productPrice * item?.soldQuantity)}`,
      action: item?._id,
    };
  });

  return (
    <div className="product-table">
      <div className="scrollbar">
        <Table className="table" columns={columns} dataSource={productList} />
      </div>
    </div>
  );
}

export default ProductTable;
