import React from 'react';
import { Button, Form, Input, Flex, Card, Typography, Divider, Checkbox, message } from 'antd';
import { Link } from 'react-router-dom';
import brandIcon from "../../../public/brandIcon.svg"
const { Title, Paragraph } = Typography;
const Login = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
    window.location.href = "/";
    message.success("Login successful");
  };
  return (
    <div className='w-full h-dvh flex max-w-screen-md mx-auto items-center justify-center'>
      <Card className='flex-1' style={{ width: 500 }}>
        <div className='flex items-center justify-center flex-col mb-3'>
          <Title level={3}>Login to Account</Title>
          <Paragraph>Please enter your email and password to continue</Paragraph>
        </div>
        <Divider />
        <Form
          layout="vertical"
          requiredMark={false}
          name="login"
          initialValues={{ remember: true }}
          style={{ width: 450 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input size='large' placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input size='large' type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link to="/forgot-password" type='Link' className='hover:!underline'>Forgot password</Link>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button size='large' style={{ backgroundColor: "var(--secondary-color)", color: "white" }} block type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <div className='flex-1 w-full flex items-center justify-center h-fit p-3 rounded-tr-[50px] rounded-br-[50px] bg-gradient-to-b from-[var(--primary-color)] to-[var(--secondary-color)]'>
        <img className='w-48 h-48' src={brandIcon} alt="" />
      </div>
    </div>
  );
};
export default Login;