import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Header, Content } = Layout;
function PageLayout({ children }) {
  return (
    <div>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="home">
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="hotel">
              <NavLink to="/hotel">Hotel</NavLink>
            </Menu.Item>
            <Menu.Item key="destinatons">
              <NavLink to="/destination">Destinaton</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
}
export default PageLayout;
