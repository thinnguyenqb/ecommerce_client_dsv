import * as React from "react";
import { Modal, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import "./FormLogin.scss";

export function FormLogin({
  visible,
  onOk,
  onCancel,
  showModalRegister,
  showModalForgotPassword,
}) {
  return (
    <div>
      <Modal
        className="login-customer"
        title="Log In"
        visible={visible}
        onCancel={onCancel}
      >
        <Form>
          <Form.Item className="input-content" label="E-MAIL">
            <Input
              className="input-login"
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Enter your e-mail"
            />
          </Form.Item>

          <Form.Item className="input-content" label="PASSWORD">
            <Input
              className="input-login"
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Enter your password"
            />
          </Form.Item>

          <Form.Item className="footer">
            <Checkbox>Remember me</Checkbox>

            <Button className="forgot-password" type="link" onClick={showModalForgotPassword}> Forgot password</Button>

            <Button type="primary" htmlType="submit" className="login-form-button" onClick={onOk}>
              Log in
            </Button>

            <div className="bottom">
              <p className="text">Don't have an account? </p>
              <Button className="register" type="link" onClick={showModalRegister}> Register </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default FormLogin;
