import React, { useState } from "react";
import { Form, Input, Button, Card, Select } from "antd";
import { gql, useMutation } from "@apollo/client";
import { NavLink } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
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

function CreateForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rooms, setRooms] = useState(0);
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [createHotel] = useMutation(CREATE_HOTEL);

  // console.log(createHotel);

  const onFinish = () => {
    createHotel({
      variables: {
        name: name,
        description: description,
        rooms: parseInt(rooms),
        website: website,
        amenities: amenities,
      },
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <Card title="Create Hotel">
      <Form
        {...layout}
        name="basic"
        labelAlign="left"
        labelCol={{ span: 6, offset: 2 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your Hotel name" }]}
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your Description",
            },
          ]}
        >
          <Input.TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Rooms" name="rooms">
          <Input
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          ></Input>
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your Phone number",
            },
          ]}
        >
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Input>
        </Form.Item>

        <Form.Item label="Website" name="website">
          <Input
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          ></Input>
        </Form.Item>

        {/* <Form.Item label="Amenities" name="amenities">
          <Select
            mode="multiple"
            placeholder="Please select"
            defaultValue={[]}
            onChange={(e) => setAmenities(e.target.value)}
          >
            <Select.Option>swimming pool</Select.Option>
            <Select.Option>Gym</Select.Option>
            <Select.Option>Tennis court</Select.Option>
          </Select>
        </Form.Item> */}

        <Form.Item {...tailLayout}>
          {/* <NavLink to="/hotel"> */}
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          {/* </NavLink> */}
        </Form.Item>
      </Form>
    </Card>
  );
}

export default CreateForm;
