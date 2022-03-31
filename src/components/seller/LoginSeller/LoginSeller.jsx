import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./LoginSeller.scss";
import { useDispatch } from "react-redux";
import { loginSeller } from './../../../redux/actions/authAction';

export function LoginSeller() {
  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    await dispatch(loginSeller(data));
  };
  return (
    <div className="login-seller">
      <p className="txt-primary">Log in</p> 

      <Form
        onFinish={handleSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        <Form.Item
          className="input-content"
          label="EMAIL"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            className="input-login"
            size="large"
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="email@sample.com"
          />
        </Form.Item>

        <Form.Item
          className="input-content"
          label="PASSWORD"
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            className="input-login"
            size="large"
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Enter password"
          />
        </Form.Item>

        <Form.Item className="footer">
          <Button type="primary" htmlType="submit" className="btn-primary">
            Log in
          </Button>

          <Button type="link" className="btn-link">
            Forgot password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginSeller;
