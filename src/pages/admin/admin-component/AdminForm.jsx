import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import ImageUploader from "../../../components/common/ImageUploader";
import { useEffect } from "react";

function AdminForm({ data, hide }) {
    console.log(data)
    const [image, setImage] = useState(data?.avatar || null)
    const [form] = Form.useForm();

    useEffect(() => {
        if (data) {
            form.setFieldsValue(data);
        }
    }, [data, form]);

    const onFinish = (values) => {
        const finalData = {
            ...values,
            avatar: image,
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
                    <Input size="large" placeholder="Enter full name" />
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
                {data ? null : <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input password!" }]}
                >
                    <Input.Password size="large" placeholder="Enter password" />
                </Form.Item>}

                {/* Submit */}
                <div className="flex gap-2 items-center">
                    <Button size="large" style={{ backgroundColor: "var(--primary-color)", color: "white", width: "100%" }} onClick={() => {
                        form.resetFields()
                        hide()
                    }}>Cancel</Button>
                    <Button size="large" style={{ backgroundColor: "var(--primary-color)", color: "white", width: "100%" }} htmlType="submit">
                        {data ? "Update Admin" : "Create Admin"}
                    </Button>
                </div>
            </Form>
        </>
    );
}

export default AdminForm;
