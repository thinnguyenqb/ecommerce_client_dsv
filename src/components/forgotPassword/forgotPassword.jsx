import * as React from "react";
import { Modal, Form, Input, Button } from "antd";
import {UserOutlined} from "@ant-design/icons"

import "./forgotPassword.scss";

export function ForgotPassword({ visible, onOk, onCancel, showModalLogin }) {
  return (
    <div>
      <Modal
        className="forgot-password"
        title="forgot password"
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
      >
        <Form>
          <Form.Item className="input-content" label="E-MAIL">
            <Input
              className="input-login"
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Enter your e-mail..."
            />
          </Form.Item>

          <Form.Item className="footer">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Submit
            </Button>

            <div className="bottom">
              <p className="text">I remember my password now. </p>
              <Button className="register" type="link" onClick={showModalLogin}>
                {" "}
                Log In{" "}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ForgotPassword;
