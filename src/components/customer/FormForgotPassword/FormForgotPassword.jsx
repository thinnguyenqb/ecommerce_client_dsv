import React, {useState, useEffect} from "react";
import { Modal, Form, Input, Button } from "antd";
import "./FormForgotPassword.scss";
import { useDispatch } from 'react-redux';
import { forgotPassword } from './../../../redux/actions/authAction';

function FormForgotPassword({ visible, onOk, onCancel, showModalLogin }) {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
  const dispatch = useDispatch()

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = async(values) => {
    await dispatch(forgotPassword(values))
  };
  return (
    <div>
      <Modal
        className="forgot-password"
        title={<div>
          Forgot Password
        </div>
        }
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
      >
         
        <Form form={form} name="horizontal_login" onFinish={onFinish}>
          <Form.Item className="input-content"
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
              placeholder="Enter your e-mail..."
              size="large"
            />
          </Form.Item>
          

          <Form.Item shouldUpdate className="footer">
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length).length
                }
              >
                Submit
              </Button>
            )}
          </Form.Item>
          <Form.Item shouldUpdate className="footer">
            <div className="bottom">
              <p className="text">I remember my password now. </p>
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

export default FormForgotPassword;
