import React from "react";
import Navbar from "../Components/Navbar";
import { gql, useQuery } from "@apollo/client";
import { Card, Col, Image, Row } from "antd";
import Layout from "antd/lib/layout/layout";

const LAST_HOTELS = gql`
  {
    hotels {
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
    <div>
      <Navbar />
      <Row gutter={[8, 8]}>
        {data.hotels.map((hotel) => {
          return (
            <div key={hotel.id}>
              <Col span={8}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example image" src={hotel.photos.url}></img>}
                >
                  <Card.Meta
                    title={hotel.name}
                    description={
                      <div>
                        {hotel.description}
                        <br></br>Phone number:{hotel.phone}
                      </div>
                    }
                  ></Card.Meta>
                </Card>
              </Col>
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default Home;
