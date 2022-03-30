import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import "./FormChangePassword.scss";
import { useDispatch } from 'react-redux';
import { changePassword } from './../../../redux/actions/profileAction';

export function FormChangePassword() {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  const dispatch = useDispatch()

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = async (values) => {
    const data = {
      cur_password: values.cur_password,
      password: values.password
    }

    await dispatch(changePassword(data))

  };
  return (
    <div className="form-change-password">
      <Form form={form} name="horizontal_login" onFinish={onFinish}>
        <Form.Item
          className="input-content"
          label="CURRENT PASSWORD"
          name="cur_password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password must be minimum 6 characters." },
          ]}
        >
          <Input.Password
            className="input-login"
            type="password"
            placeholder="Enter your password..."
          />
        </Form.Item>

        <Form.Item
          className="input-content"
          label="PASSWORD"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password must be minimum 6 characters." },
          ]}
        >
          <Input.Password
            className="input-login"
            type="password"
            placeholder="Enter your password..."
          />
        </Form.Item>

        <Form.Item
          className="input-content"
          label="RE-ENTER PASSWORD"
          name="cf_password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm password" />
        </Form.Item>

        <Form.Item shouldUpdate className="footer">
        {() => (
          <Button
            type="primary"
              htmlType="submit"
              className="primary-form-button"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Save
          </Button>
        )}
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormChangePassword;
