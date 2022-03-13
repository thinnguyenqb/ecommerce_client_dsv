import * as React from "react";
import { Form, Input, Button } from "antd";
import "./AccountEdit.scss";

export function AccountEdit({ changeTabInfo }) {
  return (
    <div className="form-edit-info">
      <Form>
        <Form.Item className="input-content" label="NAME">
          <Input
            className="input-login"
            placeholder="Enter your name..."
          />
        </Form.Item>

        <Form.Item className="input-content" label="E-MAIL">
          <Input
            className="input-login"
            type="password"
            placeholder="Enter your email..."
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
