import React from "react";
import { Button, Space } from "antd";
import { FaEye, FaRegCheckCircle } from "react-icons/fa";
import UserImage from "../../../components/user/UserImage";

export const userManageColumns = (onView, handleBlock) => [
  {
    title: "User’s",
    dataIndex: ["user_profile", "name"],
    key: "name",
    render: (_, record) => (
      <UserImage
        user={{
          name: record.user_profile.name,
          avatar: record.user_profile.avatar,
        }}
      />
    ),
  },
  {
    title: "Contact Number",
    dataIndex: ["user_profile", "phone"],
    key: "phone",
    render: (_, record) => record.user_profile.phone,
  },
  {
    title: "Email",
    dataIndex: ["user_profile", "email"],
    key: "email",
    render: (_, record) => record.user_profile.email,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (_, record) => (
      <Space>
        <Button
          onClick={() => onView(record)}
          shape="circle"
          icon={<FaEye />}
        />
        <Button
          onClick={() => handleBlock(record)}
          shape="circle"
          icon={<FaRegCheckCircle />}
        />
      </Space>
    ),
  },
];
