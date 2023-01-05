import React, { useState } from "react";
import "./App.css";

import { Link, Routes } from "react-router-dom";
import Routers from "./router/router";

// 菜单处理
import { Breadcrumb, Layout, Menu, theme, MenuProps } from "antd";

// 图标
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

// 获取路由节点
const allRouter = Routers();

// 处理菜单方法
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
// 菜单创建
const items: MenuItem[] = [
  getItem("Home", "/home", <PieChartOutlined />),
  getItem("Login", "/login", <DesktopOutlined />),
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <Menu theme="dark" defaultSelectedKeys={["/home"]} mode="inline">
            {items?.map((item: any, index: number) => {
              return (
                <Menu.Item key={index}>
                  <Link
                    to={["/home", "/"]?.includes(item?.key) ? "/" : item?.key}
                  >
                    {item?.label}
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: "0 16px" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Routes>
                {/* 路由节点挂载 */}
                {allRouter.map((item) => item)}
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
