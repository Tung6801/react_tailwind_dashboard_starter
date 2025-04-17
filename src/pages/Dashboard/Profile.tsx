import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Card, Descriptions } from 'antd';

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className='p-4'>
      <Card title="Thông tin cá nhân" bordered={false}>
        <Descriptions column={1}>
          <Descriptions.Item label="ID">{user?.id}</Descriptions.Item>
          <Descriptions.Item label="Username">{user?.username}</Descriptions.Item>
          <Descriptions.Item label="Email">{user?.email}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default Profile;