import React from 'react';
import { Menu } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  SettingOutlined 
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MenuItems: React.FC = () => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={[
        {
          key: '1',
          icon: <HomeOutlined />,
          label: <Link to="/dashboard">Home</Link>,
        },
        {
          key: '2',
          icon: <UserOutlined />,
          label: <Link to="/dashboard/profile">Profile</Link>,
        },
        {
          key: '3',
          icon: <SettingOutlined />,
          label: <Link to="/dashboard/settings">Settings</Link>,
        },
      ]}
    />
  );
};

export default MenuItems;