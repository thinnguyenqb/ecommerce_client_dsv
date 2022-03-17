import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";

import "./LoginSeller.scss";

export function LoginSeller() {
  return (
    <div className="login-seller">
      <p className="txt-primary">Log in</p>

      <Form>
        <Form.Item className="input-content" label="EMAIL">
          <Input
            className="input-login"
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }}/>}
            placeholder="email@sample.com"
          />
        </Form.Item>

        <Form.Item className="input-content" label="PASSWORD">
          <Input
            className="input-login"
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Enter password"
          />
        </Form.Item>

        <Form.Item className="footer">
          <Link to="/seller/order">
            <Button type="primary" htmlType="submit" className="btn-primary">
              Log in
            </Button>
          </Link>

          <Button type="link" className="btn-link">
            Forgot password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginSeller;
