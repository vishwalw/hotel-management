import React from "react";
import {
  Carousel,
  Card,
  Row,
  Col,
  Button,
  Typography,
  Divider,
  List,
  Space,
} from "antd";
import { gql, useQuery } from "@apollo/client";
import PageLayout from "./Navbar";
import { NavLink, useParams } from "react-router-dom";
import Loader from "./Loader";
import Page404 from "./error";
import { EditOutlined } from "@ant-design/icons";

const HOTEL_DETAIL = gql`
  query($id: ID!) {
    hotels(where: { id: $id }) {
      name
      description
      rooms
      website
      amenities
      status
      phone
      id
      photos {
        id
        url
      }
    }
  }
`;
function Hoteldetails() {
  const { hotelId } = useParams();
  const { loading, data, error } = useQuery(HOTEL_DETAIL, {
    variables: { id: hotelId },
  });
  if (loading) return <Loader />;
  if (error) return <Page404 />;
  console.log(data);
  return (
    <PageLayout>
      <Row justify="center">
        <Col span={12}>
          {data.hotels.map((hotel, index) => {
            return (
              <Card
                key={index}
                title={hotel.name}
                actions={[
                  <Row justify="end">
                    <NavLink to={`/hotel/${hotelId}/edit`}>
                      <Button shape="circle" type="primary">
                        <EditOutlined />
                      </Button>
                    </NavLink>
                  </Row>,
                ]}
              >
                <Carousel autoplay>
                  {hotel.photos.map((value, index) => {
                    return (
                      <div>
                        <img style={{ height: 300 }} src={value.url}></img>
                      </div>
                    );
                  })}
                </Carousel>
                <Row align="middle" style={{ padding: 4 }}>
                  <Space direction="vertical" align="start">
                    <Typography.Text strong>
                      Hotel description:{hotel.description}
                    </Typography.Text>
                    <Divider />
                    <Typography.Text strong>
                      Total Rooms:{hotel.rooms}
                    </Typography.Text>
                    <Divider />

                    <Typography.Text strong>
                      Hotel Contact Number:{hotel.phone}
                    </Typography.Text>
                    <Divider />

                    <Typography.Text strong>
                      Hotel Website:{hotel.website}
                    </Typography.Text>
                  </Space>
                </Row>
              </Card>
            );
          })}
        </Col>
      </Row>
    </PageLayout>
  );
}

export default Hoteldetails;
