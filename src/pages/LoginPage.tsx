import React from 'react';
import Login from '../components/Login';

const LoginPage: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    console.log('Login attempt with:', username, password);

  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');

  };

  const handleSignUp = () => {
    console.log('Sign up clicked');

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Login
        onLogin={handleLogin}
        onForgotPassword={handleForgotPassword}
        onSignUp={handleSignUp}
      />
    </div>
  );
};

export default LoginPage;