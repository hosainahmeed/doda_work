import React from "react";
import { Button, Space } from "antd";
import { FaEdit, FaTrash } from "react-icons/fa";
import UserImage from "../../../components/user/UserImage";

export const categoryManageColumns = (onView, onEdit, onDelete) => [
  {
    title: "Category",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <UserImage user={{ name: text, avatar: record.avatar }} />
    ),
  },
  {
    title: "Sub Category",
    dataIndex: "sub_category",
    key: "sub_category",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (_, record) => (
      <Space>
        <Button onClick={() => onEdit(record)} shape="circle" icon={<FaEdit />} />
        <Button onClick={() => onDelete(record)} shape="circle" icon={<FaTrash />} /> {/* MdBlock */}
      </Space>
    ),
  },
];
