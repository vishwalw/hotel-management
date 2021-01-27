import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <Layout.Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="hotel">Hotel</Menu.Item>
          <Menu.Item key="destinatons">Destinaton</Menu.Item>
        </Menu>
      </Layout.Header>
    </div>
  );
}
export default Navbar;
