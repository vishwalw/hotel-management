import { Spin } from "antd";
import React from "react";

function Loader() {
  return (
    <div
      style={{
        textAlign: "center",
        background: "#f1f2f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spin size="large" />
    </div>
  );
}

export default Loader;
