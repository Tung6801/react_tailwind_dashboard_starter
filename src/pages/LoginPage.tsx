import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../features/auth/authSlice';
import { authenticate } from '../services/authService';
import { Button, Form, Input, message } from 'antd';
import { RootState } from '../app/store';

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state:RootState) => state.auth)

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const onFinish = async (values: {username: string, password: string}) => {
    try{
      setLoading(true);
      setErrorMessage('');
      const savedAuth = localStorage.getItem('auth');
      if (savedAuth) {
        const parsedAuth = JSON.parse(savedAuth);
        if (parsedAuth.user) {
          throw new Error('Bạn đã đăng nhập. Vui lòng đăng xuất trước.');
        }
      }
      
      const user= await authenticate(values.username, values.password)
      if(!user) {
        throw new Error('Sai tên đăng nhập hoặc mật khẩu');
      }
        dispatch(loginSuccess({
          id: user.id,
          username: user.username,
          email: user.email

        }));
        message.success('Đăng nhập thành công!');
        navigate('/dashboard');
      } catch (error: any) {
        setErrorMessage(error.message || 'Đăng nhập thất bại');
      } finally {
        setLoading(false);
      }
    };
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
          {errorMessage && (
            <div className="text-red-500 text-sm mt-2 text-center">
              {errorMessage}
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;