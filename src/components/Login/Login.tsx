import React from 'react';
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
  onForgotPassword: () => void;
  onSignUp: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onForgotPassword, onSignUp }) => {
  return (
    <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
      </div>

      <LoginForm onLogin={onLogin} onForgotPassword={onForgotPassword} />

      <SocialLogin/>

      <div className="text-center text-sm">
        <span className="text-gray-600">Have not account yet?</span>{' '}
        <button
          onClick={onSignUp}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Login;