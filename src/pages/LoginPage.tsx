import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Await, useNavigate } from 'react-router-dom';
import { loginSuccess } from '../features/auth/authSlice';
import { authenticate } from '../services/authService';
import { Button, Form, Input, message } from 'antd';

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onFinish = async (values: {username: string, password: string}) => {
    try{
      setLoading(true);

      const savedAuth = localStorage.getItem('auth');
      if (savedAuth) {
        const { user } = JSON.parse(savedAuth);
        if (user) {
          throw new Error('Vui lòng đăng xuất tài khoản hiện tại trước');
        }
      }

      const user= await authenticate(values.username, values.password)
      if(user) {
        dispatch(loginSuccess({
          id: user.id,
          username: user.username,
          email: user.email

        }));
        message.success('login success !')
        navigate('/dashboard');
      }else {
        message.error('sai ten tai khoan hoac mat khau')
      }
    } catch(error) {
      message.error('Looogin failed')
    }finally {
      setLoading(false)
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <Form
          name="login"
          onFinish={onFinish}  
          layout="vertical"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Button 
            type="primary" 
            htmlType="submit" 
            loading={loading}
            block
          >
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;