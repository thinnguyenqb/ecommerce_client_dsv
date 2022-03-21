import * as React from "react";
import { Divider, Button } from "antd";
import { Link } from "react-router-dom";
import "./DropdownAccount.scss";
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/authAction'

export function DropdownAccount() {
  const dispatch = useDispatch()

  const handleLogout = async () => {
    dispatch(logout())
  }

  return (
    <div className="sub-account-customer">
      <ul>
        <Link to="/profile">
          <li>Account setting</li>
        </Link>
        <Divider className="divider-sub-account-customer" />
        <li>
          <Button
            type="link"
            onClick={handleLogout}
          >Logout
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default DropdownAccount;
