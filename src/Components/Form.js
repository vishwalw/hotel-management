import React, { useState } from "react";
import { Form, Input, Button, Card, Select, Upload } from "antd";
import { NavLink } from "react-router-dom";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function CreateForm({ data, mutation, id }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [amenitiyName, setAmenityName] = useState("");
  // console.log(createHotel);
  const addItem = () => {
    setItems([...items, amenitiyName]);
  };

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
    console.log(e);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

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
          <Input addonBefore="+91"></Input>
        </Form.Item>

        <Form.Item label="Website" name="website">
          <Input></Input>
        </Form.Item>

        <Form.Item label="Amenities" name="amenities">
          {/* <Select mode="multiple" placeholder="Please select" defaultValue={[]}>
            <Select.Option>swimming pool</Select.Option>
            <Select.Option>Gym</Select.Option>
            <Select.Option>Tennis court</Select.Option>
          </Select> */}
          <Select
            mode="multiple"
            placeholder="Add Amenities"
            dropdownRender={(menu) => (
              <div>
                {menu}
                <div
                  style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}
                >
                  <Input
                    style={{ flex: "auto" }}
                    value={amenitiyName}
                    onChange={(e) => setAmenityName(e.target.value)}
                  />
                  <a
                    style={{
                      flex: "none",
                      padding: "8px",
                      display: "block",
                      cursor: "pointer",
                    }}
                    onClick={addItem}
                  >
                    Add item
                  </a>
                </div>
              </div>
            )}
          >
            {items.map((item) => (
              <Select.Option key={item}>{item}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Photos" name="photos">
          <Upload
            accept=".jpg,.png,.jpeg"
            name="hotelImage"
            listType="picture-card"
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>

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
