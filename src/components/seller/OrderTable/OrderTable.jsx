import React, {useEffect} from "react";
import { Table, Menu, Dropdown, Button } from "antd";
import "./OrderTable.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getListOrderForSeller } from "../../../redux/actions/orderAction";
import moment from "moment";
import ItemOrderList from "../ItemOrderList/ItemOrderList";
import { CaretDownOutlined } from "@ant-design/icons"
import {BsCircleFill} from 'react-icons/bs'
import { TagStatus } from './../TagStatus/TagStatus';

export function OrderTable({ data }) {
  const columns = [
    {
      title: "ORDERID",
      dataIndex: "orderId",
      key: "orderId",
      render: (text) => <a href="/">{text}</a>,
      width: '10%',
    },
    {
      title: "ORDER DATE",
      dataIndex: "orderDate",
      key: "ordeDate",
      width: '10%',
    },
    {
      title: "DETAIL",
      dataIndex: "details",
      key: "details",
      render: (detail) => <ItemOrderList orderItem={detail} />,
      width: '50%',
    },
    {
      title: "TOTAL($)",
      dataIndex: "total",
      key: "total",
      width: '10%',
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      width: "10%",
      render: (status) => <TagStatus status={status[0]} />
    },
    { 
      title: "ACTION",
      dataIndex: "action",
      key: "action",
      render: (orderId) => (
        <Dropdown
          placement="bottomRight"
          overlay={
            <Menu>
              <Menu.Item key="1">
                <Button
                  style={{fontWeight: '500'}}
                  type="text"
                  onClick={() => console.log(orderId)}
                >
                  <BsCircleFill  style={{color: '#82bf11', marginRight: '10px'}}/>
                  Mark as Completed
                </Button>
              </Menu.Item>
              <Menu.Item key="2">
                <Button
                  style={{fontWeight: '500'}}
                  type="text"
                >
                  <BsCircleFill  style={{color: '#f05d62', marginRight: '10px'}} />
                  Mark as Canceled
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
      width: "10%",
    },
  ];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getListOrderForSeller(data))
  }, [dispatch, data])
  
  const order = useSelector((state) => state.order)

  let orderList = order?.items?.map((item) => {
    return {
      key: item?._id,
      orderId: item?._id,
      orderDate: moment(Number(item?.createdAt)).format("LL"),
      details: item?.orderItems,
      total: `${item?.totalPrice}.00`,
      status: [`${capitalizeFirstLetter(item?.status)}`],
      action: item?._id,
    };
  });

  return (
    <div className="order-table">
      <Table className="table" columns={columns} dataSource={orderList} />
    </div>
  );
}

export default OrderTable;
