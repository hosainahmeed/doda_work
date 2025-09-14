import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(values);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Create a new password. Ensure it differs from previous ones for security
          </p>
        </div>

        <Form layout="vertical" className="mt-8 space-y-6" onFinish={handleSubmit}>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password size="large" placeholder="New password" />
          </Form.Item>
          <Form.Item name="confirmPassword" rules={[{ required: true, message: 'Please confirm your password!' }, ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          })]}>
            <Input.Password size="large" placeholder="Confirm new password" />
          </Form.Item>
          <div>
            <Button
              size="large"
              htmlType="submit"
              loading={isLoading}
              disabled={isLoading}
              style={{ backgroundColor: "var(--secondary-color)", color: "white", outline: "none", border: "none" }}
              block
            >
              Update Password
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
