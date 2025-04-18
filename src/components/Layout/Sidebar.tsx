import React from 'react';
import { Layout, } from 'antd';
import { 
  MenuFoldOutlined,
  MenuUnfoldOutlined 
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../features/layout/layoutSlice';
import { RootState } from '../../app/store';
import MenuItems from './MenuItems';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const collapsed = useSelector((state: RootState) => state.layout.sidebarCollapsed);
  const dispatch = useDispatch();

  return (
    <Sider 
      collapsible 
      collapsed={collapsed} 
      trigger={null}
      width={250}
      className="shadow-lg"
    >
      <div className="flex items-center justify-center h-16 bg-blue-600 text-white">
        {collapsed ? '' : 'My Dashboard'}
      </div>
      <button 
        onClick={() => dispatch(toggleSidebar())}
        className="w-full py-2 flex items-center justify-center text-gray-500 hover:bg-gray-100"
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </button>
      <MenuItems />
    </Sider>
  );
};

export default Sidebar;