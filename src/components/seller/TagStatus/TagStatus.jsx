import React from "react";
import { Tag } from "antd";
import "./TagStatus.scss";

export function TagStatus({ status }) {
  if(status === 'Pending') return <Tag color="#fbba4e" style={{borderRadius: '50px'}}>{status}</Tag>
  if(status === 'Completed') return <Tag color="#82bf11" style={{borderRadius: '50px'}}>{status}</Tag>
  if (status === 'Canceled') return <Tag color="#f05d62" style={{ borderRadius: '50px' }}>{status}</Tag>
  return <></>
}

export default TagStatus;
