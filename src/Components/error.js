import { Button, Result } from "antd";
import { NavLink } from "react-router-dom";
import React from "react";

function Page404() {
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
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <NavLink href="/">
            <Button type="primary">Back Home</Button>
          </NavLink>
        }
      />
    </div>
  );
}

export default Page404;
