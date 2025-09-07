import React from "react";
import { Button, Popconfirm, Space } from "antd";
import { FaEye, FaRegCheckCircle } from "react-icons/fa";
import UserImage from "../../../components/user/UserImage";
import { Link } from "react-router-dom";
import { MdChat } from "react-icons/md";

export const serviceProviderColumns = (onView) => [
  {
    title: "Service Provider",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <UserImage user={{ name: text, avatar: record.avatar }} />
    ),
  },
  {
    title: "Contact Number",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Website Link",
    dataIndex: "website_link",
    key: "website_link",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (_, record) => (
      <Space>
        <Button onClick={() => onView(record)} shape="circle" icon={<FaEye />} />
        <Button onClick={() => alert("Block function called")} shape="circle" icon={<FaRegCheckCircle />} /> {/* MdBlock */}
        <Popconfirm title="Which provider you want to contact?"
          okText="Email"
          cancelText="Chat"
          onConfirm={() => {
            if (window !== undefined) {
              window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${record.email}`, "_blank");
            }
          }}
          onCancel={() => {
            if (window !== undefined) {
              window.open("/chat", "_parent");
            }
          }}
        >
          <Button shape="circle" icon={<MdChat />} />
        </Popconfirm>
      </Space>
    ),
  },
];
