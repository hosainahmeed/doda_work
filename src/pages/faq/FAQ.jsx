import React, { useState } from "react";
import { PageLayout, PageContent } from "../../components/PageLayout";
import { Button, Card, Form, Input, Modal, Space, Empty, Typography } from "antd";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const { Title, Paragraph } = Typography;

const FAQ = () => {
  const [faq, setFaq] = useState([
    {
      question: "What is DODA Work?",
      answer:
        "DODA Work is a platform for service providers to provide their services to users.",
    },
    {
      question: "What is the difference between DODA Work and other platforms?",
      answer:
        "The main difference is that DODA Work focuses on connecting service providers directly with users.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [form] = Form.useForm();

  const handleOpenModal = (item = null) => {
    setEditingItem(item);
    setIsModalOpen(true);
    if (item) {
      form.setFieldsValue(item);
    } else {
      form.resetFields();
    }
  };

  const handleDelete = (item) => {
    console.log("Delete:", item);
    alert("Delete Coming Soon")
  };

  return (
    <PageLayout title="Frequently Asked Questions">
      <PageContent>
        {/* Header Actions */}
        <div className="flex items-center justify-between mb-6">
          <Button
            style={{ backgroundColor: "var(--primary-color)", color: "white" }}
            icon={<FaPlus />}
            onClick={() => handleOpenModal()}
          >
            Add FAQ
          </Button>
        </div>

        {/* FAQ Grid */}
        {faq.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faq.map((item, index) => (
              <Card
                key={index}
                className="transition-shadow duration-300 rounded-2xl"
                title={
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-base">{item.question}</span>
                    <Space>
                      <FaEdit
                        className="cursor-pointer text-blue-500 hover:text-blue-600"
                        onClick={() => handleOpenModal(item)}
                      />
                      <FaTrash
                        className="cursor-pointer text-red-500 hover:text-red-600"
                        onClick={() => handleDelete(item)}
                      />
                    </Space>
                  </div>
                }
              >
                <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: "more" }}>
                  {item.answer}
                </Paragraph>
              </Card>
            ))}
          </div>
        ) : (
          <Empty
            description="No FAQs available yet"
            className="my-12"
            imageStyle={{ height: 80 }}
          />
        )}

        {/* Modal for Create/Edit */}
        <Modal
          title={editingItem ? "Edit FAQ" : "Add FAQ"}
          open={isModalOpen}
          centered
          width={600}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <Form
            form={form}
            layout="vertical"
            requiredMark={false}
            name="faq_form"
            onFinish={(values) => {
              console.log("Submitted values:", values);
              setIsModalOpen(false);
            }}
          >
            <Form.Item
              name="question"
              label="Question"
              rules={[{ required: true, message: "Please enter a question" }]}
            >
              <Input placeholder="Enter the FAQ question" />
            </Form.Item>
            <Form.Item
              name="answer"
              label="Answer"
              rules={[{ required: true, message: "Please enter an answer" }]}
            >
              <Input.TextArea rows={4} placeholder="Enter the FAQ answer" />
            </Form.Item>
            <Form.Item>
              <div className="flex justify-end gap-3">
                <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button
                  type="primary"
                  style={{ backgroundColor: "var(--primary-color)" }}
                  htmlType="submit"
                >
                  {editingItem ? "Update FAQ" : "Create FAQ"}
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>
      </PageContent>
    </PageLayout>
  );
};

export default FAQ;
