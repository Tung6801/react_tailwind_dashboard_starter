import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Await, useNavigate } from 'react-router-dom';
import { loginSuccess } from '../features/auth/authSlice';
import { authenticate } from '../services/authService';
import { Button,Form,Input,message } from 'antd';

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values: {username: string, password: string}) => {
    try{
      setLoading(true);
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
    }finally {
      setLoading(false)
    }

  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div>

      </div>
  
    </div>
  );
};

export default LoginPage;