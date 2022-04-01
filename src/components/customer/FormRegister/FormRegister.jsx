import React from "react";
import { Link } from "react-router-dom";
import { Modal, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./FormRegister.scss";
import { useDispatch } from "react-redux";
import { register } from "./../../../redux/actions/authAction";

function FormRegister({ visible, onOk, onCancel, showModalLogin }) {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    const formData = {
      name: e.name,
      email: e.email,
      password: e.password,
    };

    dispatch(register(formData));
  };
  return (
    <div>
      <Modal
        className="register"
        title="Register"
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
      >
        <Form
          onFinish={handleSubmit}
          initialValues={{
            name: "",
            email: "",
            password: "",
            cf_password: "",
          }}
        >
          <Form.Item
            className="input-content"
            label="NAME"
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              className="input-login"
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Enter your name..."
            />
          </Form.Item>

          <Form.Item
            className="input-content"
            label="E-MAIL"
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
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Enter your e-mail..."
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
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Enter your password..."
            />
          </Form.Item>

          <Form.Item
            className="input-content"
            label="CONFIRM PASSWORD"
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
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm password"
            />
          </Form.Item>

          <Form.Item className="footer">
            <div className="top">
              <p>By creating an account you agree to the</p>
              <div className="bottom">
                <Link className="link-primary" to="/">Terms of Service</Link>
                <p>and</p>
                <Link className="link-primary" to="/">Privacy Policy</Link>
              </div>
            </div>

            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>

            <div className="bottom-register">
              <p className="text">Do have an account? </p>
              <Button className="register" type="link" onClick={showModalLogin}>
                Log In
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default FormRegister;
