import * as React from "react";
import "./AccountAvatar.scss";
import { Dropdown, Avatar } from 'antd'
import { DropdownAccount } from '../DropdownAccount/DropdownAccount'

export function AccountAvatar() {
  const menu = (
    <DropdownAccount />
  );

  return (
    <div className="account-customer">
      <Dropdown overlay={menu} placement="bottomRight">
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </Dropdown>
    </div>
  );
}


export default AccountAvatar
