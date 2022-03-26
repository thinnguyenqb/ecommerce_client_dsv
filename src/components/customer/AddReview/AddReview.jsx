import React, { useState } from "react";
import { Form, Button, Input, Rate, Row, Col } from "antd";
import "./AddReview.scss";
import axios from "axios";

const { TextArea } = Input;
const desc = ["Terrible", "Bad", "Normal", "Good", "Wonderful"];

export function AddReview({ productId, userId, pagination, setPagination }) {
  const [rating, setRating] = useState(5);
  const handleChange = (value) => {
    setRating(value);
  };
  const onFinish = async(values) => {
    const data = {
      productId,
      userId,
      title: values.title,
      comment: values.comment,
      star: rating,
    };
    await axios.post(process.env.REACT_APP_API_URL + `/api/review`, data)
      .then((res) => {
        setPagination({
          ...pagination,
          reviews: pagination.reviews.concat(res.data.result)
        })
      })
      .catch((err) => console.log(err))
  };

  return (
    <div className="comment-form">
      <Form
        onFinish={onFinish}
      >
        <Form.Item
          name="title"
        >
          <Input allowClear placeholder="TITLE" />
        </Form.Item>
        <Form.Item
          name="comment"
        >
          <TextArea
            rows={4}
            allowClear
            placeholder="Add your comment here..."
          />
        </Form.Item>
        <Row justify="space-between">
          <Col span={20}>
            <Form.Item
            >
              {"*Rating for us:    "}
              <Rate tooltips={desc} onChange={handleChange} value={rating} />
              {rating ? (
                <span className="ant-rate-text">{desc[rating - 1]}</span>
              ) : (
                ""
              )}
            </Form.Item>
          </Col>
          <Col span={4} >
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                className="btn-add-review"
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default AddReview;
