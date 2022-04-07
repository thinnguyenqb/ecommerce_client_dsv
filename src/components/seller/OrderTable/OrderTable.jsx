import React, {useState, useEffect} from "react";
import { Table, Menu, Dropdown, Button } from "antd";
import "./OrderTable.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getListOrderForSeller } from "../../../redux/actions/orderAction";
import moment from "moment";
import ItemOrderList from "../ItemOrderList/ItemOrderList";
import { CaretDownOutlined } from "@ant-design/icons"
import {BsCircleFill} from 'react-icons/bs'
import { TagStatus } from './../TagStatus/TagStatus';
import { useMutation } from "@apollo/client";
import { UPDATE_STATUS_ORDER } from "../../../graphql-client/order/mutations";

export function OrderTable({ data }) {
  const [action, dataMutation] = useMutation(UPDATE_STATUS_ORDER)
  const [loading, setLoading] = useState(false)

  const handleMarkCompleted = orderId => {
    action({
      variables: {
        input: {
          status: "completed",
          orderId: orderId
        }
      },
		})
  }
  const handleMarkCanceled = orderId => {
    action({
      variables: {
        input: {
          status: "canceled",
          orderId: orderId
        }
      },
		})
  }
  
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
      width: '15%',
    },
    {
      title: "DETAIL",
      dataIndex: "details",
      key: "details",
      render: (detail) => <ItemOrderList orderItem={detail} />,
      width: '45%',
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
                  onClick={() => handleMarkCompleted(orderId)}
                >
                  <BsCircleFill  style={{color: '#82bf11', marginRight: '10px'}}/>
                  Mark as Completed
                </Button>
              </Menu.Item>
              <Menu.Item key="2">
                <Button
                  style={{fontWeight: '500'}}
                  type="text"
                  onClick={() => handleMarkCanceled(orderId)}
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
  const [orders, setOrders] = useState([])
  const order = useSelector((state) => state.order)
  const dispatch = useDispatch()
  
  const dataUpdate = dataMutation?.data?.updateOrder
  useEffect(() => {
    setLoading(true)
    setOrders(order?.items)
    setLoading(false)
  }, [order?.items])
  
  useEffect(() => {
    setOrders(dataUpdate)
  },[dataUpdate])
  
  useEffect(() => {
    dispatch(getListOrderForSeller(data))
  }, [dispatch, data])
  
  let orderList = orders?.slice(0)?.reverse()?.map((item) => {
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
      <Table loading={loading} className="table" columns={columns} dataSource={orderList} />
    </div>
  );
}

export default OrderTable;
