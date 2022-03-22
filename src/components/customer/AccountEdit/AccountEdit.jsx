import React from "react";
import { Form, Input, Button } from "antd";
import "./AccountEdit.scss";
import axios from "axios";


export function AccountEdit({ userInfo, nameUserState, changeTabInfo }) {
  const [nameUser, setNameUser] = nameUserState;
  const token = localStorage.getItem("access_token");

  const onChange = e => {
    setNameUser(e.target.value);
  };

  const updateInfor = () => {
    try {
      axios.patch(
        process.env.REACT_APP_API_URL + '/user/update',
        {
          name: nameUser,
        },
        {
          headers: { Authorization: token },
        }
      );
    } catch (err) {
    }
  };
  
  const handleSubmit = () => {
    updateInfor()
  }
  
  return (
    <div className="form-edit-info">
      <Form
        onFinish={handleSubmit}
      >
        <Form.Item className="input-content" label="NAME">
          <Input
            className="input-login"
            placeholder="Enter your name..."
            defaultValue={nameUser}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item className="input-content" label="E-MAIL">
          <Input
            className="input-login"
            placeholder="Enter your email..."
            value={userInfo.email}
            disabled
          />
        </Form.Item>

        <Form.Item className="footer">
          <Button
            type="link"
            className="secondary-form-button"
            onClick={() => changeTabInfo("1")}
          >
            Cancel
          </Button>

          <Button
            type="primary"
            htmlType="submit"
            className="primary-form-button"
            onClick={() => changeTabInfo("1")}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AccountEdit;
