import React from 'react';
import { Menu } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  SettingOutlined 
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const MenuItems: React.FC = () => {
  const location = useLocation();

  const getSelectedKey = () => {
    if (location.pathname === '/dashboard') return '1';
    if (location.pathname === '/dashboard/profile') return '2';
    if (location.pathname === '/dashboard/setting') return '3';
    return '';
  }
  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[getSelectedKey()]}
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