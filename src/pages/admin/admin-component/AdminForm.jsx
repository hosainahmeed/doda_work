import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import ImageUploader from "../../../components/common/ImageUploader";

function AdminForm() {
    const [image, setImage] = useState(null)
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const finalData = {
            ...values,
            image: image,
        }
        console.log(finalData)
    };


    return (
        <>
            <ImageUploader
                initialImage={image}
                fallback="/default-avatar.png"
                onChange={(file) => setImage(file)}
                image={image}
                setImage={setImage}
            />
            <Form
                layout="vertical"
                requiredMark={false}
                form={form}
                onFinish={onFinish}
            >
                {/* Name */}
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please input name!" }]}
                >
                    <Input placeholder="Enter full name" />
                </Form.Item>

                {/* Email */}
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Please input email!" }]}
                >
                    <Input placeholder="Enter email" />
                </Form.Item>

                {/* Password - only in Create mode */}
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input password!" }]}
                >
                    <Input.Password placeholder="Enter password" />
                </Form.Item>

                {/* Submit */}
                <Form.Item>
                    <Button style={{ backgroundColor: "var(--primary-color)", color: "white" }} htmlType="submit" className="w-full">
                        Create Admin
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default AdminForm;
