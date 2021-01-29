import React from "react";
import PageLayout from "./Navbar";
import { gql, useQuery } from "@apollo/client";
import { Card, Col, Row } from "antd";
import Loader from "./Loader";
import Page404 from "./error";

const LAST_HOTELS = gql`
  {
    hotels(last: 16) {
      id
      name
      description
      rooms
      amenities
      phone
      website
      photos {
        id
        url
      }
    }
  }
`;
function Home() {
  const { loading, error, data } = useQuery(LAST_HOTELS);

  if (loading) return <Loader />;
  if (error) return <Page404 />;
  console.log(data);

  return (
    <PageLayout>
      <Row gutter={[16, 16]} align="middle">
        {data.hotels.map((hotel, index) => {
          return (
            <Col key={index} xs={12} sm={8} md={8} lg={6} xl={6}>
              <div key={hotel.id}>
                <Card
                  hoverable
                  bordered
                  cover={
                    <img
                      style={{ height: 200 }}
                      alt="example image"
                      src={hotel.photos.length ? hotel.photos[0].url : ""}
                    ></img>
                  }
                  actions={[
                    <a key="website">{hotel.website}</a>,
                    <p key="phone">{hotel.phone}</p>,
                  ]}
                  style={{ height: "100%", alignItems: "stretch" }}
                >
                  <Card.Meta
                    title={hotel.name}
                    description={hotel.description}
                  ></Card.Meta>

                  <p>
                    {hotel.website}
                    {hotel.phone}
                  </p>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>
    </PageLayout>
  );
}

export default Home;
