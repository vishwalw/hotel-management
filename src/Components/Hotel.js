import { Button, Row, Col, Card, Affix, Typography } from "antd";
import React from "react";
import PageLayout from "./Navbar";
import { PlusOutlined } from "@ant-design/icons";
import { gql, useQuery } from "@apollo/client";
import { Link, NavLink } from "react-router-dom";
import Loader from "./Loader";
import Page404 from "./error";

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
  if (loading) return <Loader />;
  if (error) return <Page404 />;
  console.log(data);
  return (
    <PageLayout>
      <Row justify="end" style={{ paddingBottom: 16 }}>
        <Link to="/hotel/create">
          <Affix offsetTop={60}>
            <Button type="primary">
              <PlusOutlined />
              Create
            </Button>
          </Affix>
        </Link>
      </Row>
      <Row gutter={[10, 10]} align="middle" type="flex">
        {data.hotels.map((hotel) => {
          return (
            <Col xs={12} sm={8} md={8} lg={6} xl={6}>
              <div key={hotel.id}>
                <NavLink to={`/hotel/${hotel.id}`}>
                  <Card
                    hoverable
                    cover={
                      <img
                        style={{ height: 200 }}
                        alt="example image"
                        src={hotel.photos.length ? hotel.photos[0].url : ""}
                      ></img>
                    }
                    style={{ height: "100%" }}
                  >
                    <Card.Meta
                      title={hotel.name}
                      description={
                        <Typography.Text ellipsis={true}>
                          {hotel.description}
                        </Typography.Text>
                      }
                    ></Card.Meta>
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
