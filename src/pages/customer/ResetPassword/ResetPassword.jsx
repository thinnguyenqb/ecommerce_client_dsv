import React, { useState, useEffect } from "react";
import { Layout, Form, Input, Button } from "antd";
import "./ResetPassword.scss";
import { FooterCustomer } from "../../../components/sharedComponent/Footer/Footer";
import { Header } from "../../../components/sharedComponent/Header/Header";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../../redux/actions/authAction";
import { useParams } from 'react-router-dom';

export function ResetPassword() {
  const { Content } = Layout;
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
  const { token } = useParams()
  
  const dispatch = useDispatch();

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = async (values) => {
    const data = {
      password: values.password,
      token
    }
    await dispatch(resetPassword(data))
  };

  return (
    <div className="reset-page">
      <Header />

      <Content className="body-page">
        <div className="form-change-password">
          <Form form={form} name="horizontal_login" onFinish={onFinish}>
            <Form.Item
              className="input-content"
              label="NEW PASSWORD"
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
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
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
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                >
                  Save
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
      </Content>

      <FooterCustomer />
    </div>
  );
}

export default ResetPassword;
