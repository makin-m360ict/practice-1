import React from 'react';
import { Button, Card, Col, Form, Input, InputNumber, Row, Space, Spin, message } from 'antd';
import Column from 'antd/es/table/Column';
import { usePostUserMutation } from '../../features/api/apiSlice';
import Loader from '../../Components/Loader/Loader';
// import { success } from '../../Components/Message/Message';

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



const AddUsers: React.FC = () => {

  const [postUser, { isLoading, isSuccess }] = usePostUserMutation()
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values: any) => {
    postUser(values.user)

  };
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  return (
    <>

      {isSuccess && success}
      
      <Row justify="center" style={{ margin: "25px 0" }}>
        <Col xs={24} md={12} lg={8} >
          <Card title="Add Users" size='small'  >
            <Form

              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              style={{ maxWidth: 600, padding: "15px" }}
              validateMessages={validateMessages}
            >
              <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true, type: 'email' }]}>
                <Input />
              </Form.Item>
              {isLoading && <Loader   />}
              <Form.Item name={['user', 'website']} label="Website" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'username']} label="Username" rules={[{ required: true }]}>
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
      </Row>

      {contextHolder}
    </>

  );
}

export default AddUsers;