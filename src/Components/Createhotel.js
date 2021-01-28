import React, { useState } from "react";
import Form from "./Form";
import { gql, useMutation } from "@apollo/client";
import { Layout, Row, Col } from "antd";
import PageLayout from "./Navbar";

const CREATE_HOTEL = gql`
  mutation CREATE_HOTEL(
    $name: String!
    $description: String
    $rooms: Int
    $phone: String
    $website: String
  ) {
    createHotel(
      data: {
        name: $name
        description: $description
        rooms: $rooms
        phone: $phone
        website: $website
      }
    ) {
      name
      description
      id
      rooms
      website
      phone
    }
  }
`;

function Createhotel() {
  const [createHotel] = useMutation(CREATE_HOTEL);
  return (
    <div>
      <PageLayout>
        <Row justify="center">
          <Col span={12}>
            <Form mutation={createHotel} />
          </Col>
        </Row>
      </PageLayout>
    </div>
  );
}

export default Createhotel;
