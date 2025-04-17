import React from 'react';
import { Layout, Dropdown, Avatar, Badge } from 'antd';
import { 
  BellOutlined,
  LogoutOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { logout } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const AppHeader: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const items = [
    {
      key: '1',
      label: 'Profile',
      onClick: () => navigate('/dashboard/profile'),
    },
    {
      key: '2',
      label: 'Logout',
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ];

  return (
    <Header className="flex items-center justify-between bg-white shadow-sm px-6">
      <div className="flex-1"></div>
      <div className="flex items-center gap-4">
        <Badge count={0}>
          <BellOutlined className="text-xl cursor-pointer" />
        </Badge>
        <Dropdown menu={{ items }} placement="bottomRight">
          <div className="flex items-center gap-2 cursor-pointer">
          <Avatar 
            icon={<UserOutlined />} 
            className="bg-blue-500 text-white"
          />
            <span className="font-medium">{user?.username}</span>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;