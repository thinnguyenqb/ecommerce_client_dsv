import * as React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Loading() {
  return (
    <Spin indicator={antIcon} size="large"/>
  );
}