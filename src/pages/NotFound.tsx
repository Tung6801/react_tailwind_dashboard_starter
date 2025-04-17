import React from 'react';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button 
            type="primary"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => navigate('/')}
          >
            Back Home
          </Button>
        }
        className="shadow-lg rounded-lg p-8 bg-white"
      />
    </div>
  );
};

export default NotFound;