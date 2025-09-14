import React from "react";
import { Button, Popconfirm, Space } from "antd";
import { FaEdit, FaTrash } from "react-icons/fa";
import UserImage from "../../../components/user/UserImage";
import { GrLinkNext } from "react-icons/gr";

export const categoryManageColumns = (onEdit, onDelete, onNavigate) => [
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
        <Popconfirm
          title={`Are you sure to delete ${record.name}?`}
          placement="topRight"
          okButtonProps={{ style: { backgroundColor: "#FFBA00", color: "white" } }}
          onConfirm={() => onDelete(record)}>
          <Button shape="circle" icon={<FaTrash />} />
        </Popconfirm>
        <Button onClick={() => onNavigate(record._id)} shape="circle" icon={<GrLinkNext />} />
      </Space>
    ),
  },
];
