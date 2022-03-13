import * as React from "react";
import { Form, Input, Button } from "antd";
import "./styles.scss";

export function FormChangePassword() {
  return (
    <div className="form-change-password">
      <Form>
        <Form.Item className="input-content" label="CURRENT PASSWORD">
          <Input
            className="input-login"
            placeholder="Enter your password..."
          />
        </Form.Item>

        <Form.Item className="input-content" label="NEW PASSWORD">
          <Input
            className="input-login"
            type="password"
            placeholder="Enter your password..."
          />
        </Form.Item>

        <Form.Item className="input-content" label="RE-ENTER PASSWORD">
          <Input
            className="input-login"
            type="password"
            placeholder="Enter your password..."
          />
        </Form.Item>

        <Form.Item className="footer">
          <Button
            type="primary"
            htmlType="submit"
            className="primary-form-button"
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormChangePassword;
