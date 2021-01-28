import React from "react";
import { Carousel, Card, Row, Col, Button } from "antd";
import { gql, useQuery } from "@apollo/client";
import PageLayout from "./Navbar";
import { NavLink } from "react-router-dom";

const HOTEL_DETAIL = gql`
  {
    hotels(where: { id: "ckgn8ft205qzg0869xejipqsh" }) {
      name
      description
      rooms
      website
      amenities
      status
      id
    }
  }
`;
function Hoteldetails(props) {
  const { loading, data, error } = useQuery(HOTEL_DETAIL);
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>An error Occured!!</h2>;
  console.log("INEDITCOMPONENT");
  console.log(props.match.params.hotelId);
  const hotelId = props.match.params.hotelId;
  return (
    <PageLayout>
      <Row justify="center">
        <Col span={12}>
          <Card title="Hotel name">
            <Carousel autoplay>
              <div>
                <img src="https://picsum.photos/200/300"></img>
              </div>
              <div>
                <img src="https://picsum.photos/100/300"></img>
              </div>
              <div>
                <img src="https://picsum.photos/300/300"></img>
              </div>
              <div>
                <img src="https://picsum.photos/200/200"></img>
              </div>
            </Carousel>
            <NavLink to={`/hotel/${hotelId}/edit`}>
              <Button>Edit Details</Button>
            </NavLink>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  );
}

export default Hoteldetails;
