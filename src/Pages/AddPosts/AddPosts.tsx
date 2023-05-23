import React from 'react';
import { Button, Card, Col, Form, Input, InputNumber, Row, Space, Spin } from 'antd';
import Column from 'antd/es/table/Column';
import {  useUploadPostMutation } from '../../features/api/apiSlice';
// import { Success } from '../../Components/Message/Message';
import { message } from "antd";
import Loader from '../../Components/Loader/Loader';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};



const AddPosts: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [uploadPost, {isLoading, isSuccess }] = useUploadPostMutation()
  console.log(isSuccess,'isSuccess isSuccess')
  const onFinish = (values: any) => {
    uploadPost(values.post);
  };
  return (
    <>
    
      {isSuccess && messageApi.open({
        type: 'success',
        content: 'User successfully created',
      })}
      <Row justify="center" style={{ margin: "25px 0" }}>
        <Col xs={24} md={12} lg={8} >
          <Card title="Add Post" size='small'  >
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              style={{ maxWidth: 600, padding: "15px" }}
              validateMessages={validateMessages}
            >
              <Form.Item name={['post', 'title']} label="Title" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              {isLoading && <Loader />}
              <Form.Item name={['post', 'body']} label="Body" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row></>

  );
}

export default AddPosts;