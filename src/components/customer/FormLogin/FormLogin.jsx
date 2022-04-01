import React from "react";
import { Modal, Form, Input, Button, Checkbox } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "./FormLogin.scss";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/authAction";

export function FormLogin({
  visible,
  onOk,
  onCancel,
  showModalRegister,
  showModalForgotPassword,
}) {
  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    await dispatch(login(data));
  };

  return (
    <Modal
      className="login-customer"
      title="Log In"
      visible={visible}
      onCancel={onCancel}
    >
      <Form
        onFinish={handleSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        <Form.Item
          className="input-content"
          label="E-MAIL"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
          name="email"
        >
          <Input
            className="input-login"
            size="large"
            placeholder="Enter your e-mail"
          />
        </Form.Item>

        <Form.Item
          className="input-content"
          label="PASSWORD"
          rules={[{ required: true, message: "Please input your Password!" }]}
          name="password"
        >
          <Input.Password
            className="input-login"
            placeholder="Enter your password"
            size="large"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item className="footer">
          <Checkbox>Remember me</Checkbox>

          <Button
            className="forgot-password"
            type="link"
            onClick={showModalForgotPassword}
          >
            {" "}
            Forgot password
          </Button>

          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={onOk}
          >
            Log in
          </Button>

          <div className="bottom">
            <p className="text">Don't have an account? </p>
            <Button
              className="register"
              type="link"
              onClick={showModalRegister}
            >
              {" "}
              Register{" "}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default FormLogin;
