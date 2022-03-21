import * as React from "react";
import "./AccountAvatar.scss";
import { Dropdown, Avatar } from 'antd'
import { DropdownAccount } from '../DropdownAccount/DropdownAccount'

export function AccountAvatar({user}) {
  const menu = (
    <DropdownAccount />
  );

  return (
    <div className="account-customer">
      <Dropdown overlay={menu} placement="bottomRight">
        <Avatar src={user?.avatar}/>
      </Dropdown>
    </div>
  );
}


export default AccountAvatar
