import React, { useEffect, useState } from "react";
import { Form, Input, Modal, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function CategoryForm({ open, hide, title, onFinish, record }) {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);

    useEffect(() => {
        if (record) {
            form.setFieldsValue(record);
            if (record.avatar) {
                setFileList([{
                    uid: '-1',
                    name: record.name,
                    status: 'done',
                    url: record.avatar,
                }]);
            }
        } else {
            setFileList([]);
        }
    }, [record, form]);

    const handleUploadChange = ({ fileList }) => {
        setFileList(fileList);
    };

    return (
        <Modal
            title={title}
            open={open}
            onOk={() => hide()}
            onCancel={() => hide()}
            footer={null}
        >
            <Form
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
                form={form}
            >
                <Form.Item name="avatar">
                    <Upload
                        name="avatar"
                        listType="picture"
                        maxCount={1}
                        accept="image/*"
                        fileList={fileList}
                        onChange={handleUploadChange}
                        beforeUpload={() => false}
                    >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="name"
                    label="Category Name"
                    rules={[{ required: true, message: "Please input category name!" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button
                        style={{ backgroundColor: "var(--primary-color)", color: "white" }}
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default CategoryForm;