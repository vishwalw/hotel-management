import React from "react";
import PageLayout from "./Navbar";
import { gql, useQuery } from "@apollo/client";
import { Card, Col, Row } from "antd";

const LAST_HOTELS = gql`
  {
    hotels(last: 10) {
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

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>An error occured</h2>;
  console.log(data);

  return (
    <PageLayout>
      <Row gutter={[10, 10]}>
        {data.hotels.map((hotel) => {
          return (
            <Col xs={12} sm={8} md={8} lg={6} xl={6}>
              <div key={hotel.id}>
                <Card
                  hoverable
                  cover={<img alt="example image" src={hotel.photos.url}></img>}
                >
                  <p>{hotel.name}</p>
                  <p>{hotel.description}</p>
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
