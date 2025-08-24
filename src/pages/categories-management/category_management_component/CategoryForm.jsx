import React from "react";
import { Form, Input, Modal, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
function CategoryForm({ addCategoryModalVisible, setAddCategoryModalVisible, title, onFinish }) {
    return (
        <Modal
            title={title}
            open={addCategoryModalVisible}
            onOk={() => setAddCategoryModalVisible(false)}
            onCancel={() => setAddCategoryModalVisible(false)}
            footer={null}
        >
            <Form
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
            >
                <Form.Item name="avatar">
                    <Upload
                        name="avatar"
                        listType="picture"
                        maxCount={1}
                        accept="image/*"
                        onChange={(info) => {
                            if (info.file.status === "done") {
                                console.log("Upload completed");
                            }
                        }}
                    >
                        <Button icon={<UploadOutlined />} >Upload</Button>
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
                    <Button style={{ backgroundColor: "var(--primary-color)", color: "white" }} htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default CategoryForm;