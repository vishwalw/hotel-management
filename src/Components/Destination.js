import { Button, Row, Col, Card, Affix, Typography } from "antd";
import React from "react";
import PageLayout from "./Navbar";
import { PlusOutlined } from "@ant-design/icons";
import { gql, useQuery } from "@apollo/client";
import { Link, NavLink } from "react-router-dom";
import Loader from "./Loader";
import Page404 from "./error";

const DESTINATIONS = gql`
  query {
    destinations {
      id
      status
      location
      description
      image {
        url
        id
      }
    }
  }
`;

function Destination() {
  const { loading, error, data } = useQuery(DESTINATIONS);
  if (loading) return <Loader />;
  if (error) return <Page404 />;
  console.log(data);
  return (
    <PageLayout>
      <Row justify="end" style={{ paddingBottom: 16 }}>
        <Link to="/destination/create">
          <Affix offsetTop={60}>
            <Button type="primary">
              <PlusOutlined />
              Create
            </Button>
          </Affix>
        </Link>
      </Row>
      <Row gutter={[10, 10]} align="middle" type="flex">
        {data.destinations.map((destination) => {
          // console.log(destination.image);
          return (
            <Col xs={12} sm={8} md={8} lg={6} xl={6}>
              <div key={destination.id}>
                <NavLink to={`/hotel/${destination.id}`}>
                  <Card
                    hoverable
                    cover={
                      <img
                        style={{ height: 200 }}
                        alt="example image"
                        src={destination.image ? destination.image.url : ""}
                      ></img>
                    }
                    style={{ height: "100%" }}
                  >
                    <Card.Meta
                      title={destination.name}
                      description={
                        <Typography.Text ellipsis={true}>
                          {destination.description}
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

export default Destination;
