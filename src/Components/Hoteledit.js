import { gql, useMutation, useQuery } from "@apollo/client";
import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PageLayout from "./Navbar";
import Form from "./Form";
import Loader from "./Loader";
import Page404 from "./error";

const EDITHOTEL = gql`
  mutation UPDATEHOTEL(
    $name: String!
    $description: String
    $rooms: Int
    $phone: String
    $website: String
    $id: ID!
  ) {
    updateHotel(
      data: {
        name: $name
        description: $description
        rooms: $rooms
        phone: $phone
        website: $website
      }
      where: { id: $id }
    ) {
      name
      id
      phone
      rooms
      website
      description
    }
  }
`;
const GET_HOTEL_DETAILS = gql`
  query($id: ID!) {
    hotels(where: { id: $id }) {
      name
      id
      description
      rooms
      website
      amenities
      status
      phone
    }
  }
`;

function Hoteledit() {
  const { hotelId } = useParams();
  const [updateHotel] = useMutation(EDITHOTEL);

  const { loading, error, data } = useQuery(GET_HOTEL_DETAILS, {
    variables: { id: hotelId },
  });
  if (loading) return <Loader />;
  if (error) return <Page404 />;

  return (
    <PageLayout>
      <Row justify="center">
        <Col span={12}>
          <Form data={data.hotels[0]} mutation={updateHotel} id={hotelId} />
        </Col>
      </Row>
    </PageLayout>
  );
}

export default Hoteledit;
