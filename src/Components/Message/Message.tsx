import { message } from "antd";


const [messageApi, contextHolder] = message.useMessage();

export const Success = () => {
  return  messageApi.open({
        type: 'success',
        content: 'User successfully created',
    });
};