import React, {useState} from "react";
import { Modal, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import "./FormLogin.scss";
//import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/authAction";

const initialState = {
  email: '',
  password: '',
}

export function FormLogin({
  visible,
  onOk,
  onCancel,
  showModalRegister,
  showModalForgotPassword,
}) {
  const dispatch = useDispatch()
  //const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialState);
  //const history = useHistory()
  
  const handleChangeInput = e => {
    const { name, value } = e.target;
    setUser({...user, [name]: value})
  }
  
  const handleSubmit = async e => {
    await dispatch(login(user))
  }
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
            email: '',
            password: '', 
        }}>
          <Form.Item
            className="input-content"
            label="E-MAIL"
            onChange={handleChangeInput}
            rules={[{ required: true, type: "email", message: 'Please input your email!' }]}
            >
            <Input
              name="email"
              className="input-login"
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              placeholder="Enter your e-mail"
              value={user.email}
              onChange={handleChangeInput}
            />
          </Form.Item>

          <Form.Item
            className="input-content"
            label="PASSWORD"
            onChange={handleChangeInput}
            rules={[{ required: true, message: 'Please input your Password!' }]}
            >
            <Input.Password
              name="password"
              className="input-login"
              placeholder="Enter your password"
              size="large"
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
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
  );
}

export default FormLogin;
