import React from "react";
import { Button, Space } from "antd";
import { FaEye, FaRegCheckCircle } from "react-icons/fa";
import UserImage from "../../../components/user/UserImage";

export const userManageColumns = (onView) => [
  {
    title: "User’s",
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
