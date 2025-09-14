import { Button, Form, Input, message } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      message.success("Otp sent successfully");
      window.location.href = "/verify-otp";
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Forgot your password?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email address and we'll send you a otp to reset your password.
          </p>
        </div>

        <Form layout="vertical" className="mt-8 space-y-6" onFinish={handleSubmit}>
          <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input
              size="large"
              name="email"
              placeholder="Email address"
            />
          </Form.Item>

          <div>
            <Button
              loading={isLoading}
              size="large"
              style={{ backgroundColor: "var(--secondary-color)", color: "white", outline: "none", border: "none" }}
              htmlType="submit"
              block
            >
              Send Otp
            </Button>
          </div>
        </Form>

        <div className="text-center mt-4">
          <Link to="/login" className="font-medium text-[var(--secondary-color)] hover:!underline text-sm">
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
