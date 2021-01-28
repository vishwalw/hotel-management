import React, { useState } from "react";
import { Form, Input, Button, Card, Select } from "antd";
import { NavLink } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function CreateForm({ data, mutation, id }) {
  // console.log(createHotel);

  const onFinish = (e) => {
    const { name, description, rooms, website, amenities, phone } = e;
    mutation({
      variables: {
        id: id || "",
        name,
        description,
        rooms: parseInt(rooms),
        website,
        amenities,
        phone,
      },
    })
      .then((res) => console.log("Mutation successfully done"))
      .catch((error) => console.log(error));
  };

  return (
    <Card title="Create Hotel">
      <Form
        initialValues={data || {}}
        {...layout}
        name="basic"
        labelAlign="left"
        labelCol={{ span: 6, offset: 2 }}
        onFinish={(e) => onFinish(e)}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your Hotel name" }]}
        >
          <Input />
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
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Rooms" name="rooms">
          <Input></Input>
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
          <Input></Input>
        </Form.Item>

        <Form.Item label="Website" name="website">
          <Input></Input>
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
