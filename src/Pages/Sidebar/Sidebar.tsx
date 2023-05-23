/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

interface INavList {
  label: JSX.Element,
  key: number,


}




const items: INavList[] = [
  {
    label: <Link to="">  <PieChartOutlined style={{ marginRight: "30px" }} /> Users</Link>,
    key: 12,

  },
  {
    label: <Link to="posts">  <PieChartOutlined style={{ marginRight: "30px" }} /> Posts</Link>,
    key: 111,

  },

  {
    label: <Link to="addposts">  <PieChartOutlined style={{ marginRight: "30px" }} /> Add posts</Link>,
    key: 13,

  },
  {
    label: <Link to="addusers">  <PieChartOutlined style={{ marginRight: "30px" }} /> Add users</Link>,
    key: 555

  }, {
    label: <Link to="team">  <PieChartOutlined style={{ marginRight: "30px" }} /> Team</Link>,
    key: 5555

  },



];




type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

function createMenuItems(items: Array<any>): Array<MenuItem> {
  return items.map((item) => {
    const { label, key, icon, children } = item;
    if (Array.isArray(children)) {
      return getItem(label, key, icon, createMenuItems(children));
    }
    return getItem(label, key, icon);
  });
}

export const menuItems: MenuItem[] = createMenuItems(items);




function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={menuItems} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px', }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Sidebar
