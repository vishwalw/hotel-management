import { Button, Row, Col, Card } from "antd";
import React from "react";
import PageLayout from "./Navbar";
import { PlusOutlined } from "@ant-design/icons";
import { gql, useQuery } from "@apollo/client";
import { Link, NavLink } from "react-router-dom";

const HOTELS = gql`
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

function Hotel() {
  const { loading, error, data } = useQuery(HOTELS);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>An error occured!</p>;
  console.log(data);
  return (
    <PageLayout>
      <Link to="/hotel/create">
        <Button type="primary">
          <PlusOutlined />
          Create
        </Button>
      </Link>
      <Row gutter={[10, 10]}>
        {data.hotels.map((hotel) => {
          return (
            <Col xs={12} sm={8} md={8} lg={6} xl={6}>
              <div key={hotel.id}>
                <NavLink to={`/hotel/${hotel.id}`}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example image"
                        src={hotel.photos.length ? hotel.photos[0].url : ""}
                      ></img>
                    }
                  >
                    <p>{hotel.name}</p>
                    <p>{hotel.description}</p>
                    <p>
                      {hotel.website}
                      {hotel.phone}
                      {hotel.photos.url}
                    </p>
                  </Card>
                </NavLink>
              </div>
            </Col>
          );
        })}
      </Row>
    </PageLayout>
  );
}

export default Hotel;
