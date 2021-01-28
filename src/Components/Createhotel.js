import React from "react";
import CreateForm from "./Form";
import { Layout, Row, Col } from "antd";
import PageLayout from "./Navbar";

function Createhotel() {
  return (
    <div>
      <PageLayout>
        <Row justify="center">
          <Col span={12}>
            <CreateForm />
          </Col>
        </Row>
      </PageLayout>
    </div>
  );
}

export default Createhotel;
