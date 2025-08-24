import React from "react";
import { Button, Space } from "antd";
import { FaEye, FaRegCheckCircle } from "react-icons/fa";
import UserImage from "../../../components/user/UserImage";

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
        <Button onClick={() => onView(record)} shape="circle" icon={<FaRegCheckCircle />} /> {/* MdBlock */}
      </Space>
    ),
  },
];
