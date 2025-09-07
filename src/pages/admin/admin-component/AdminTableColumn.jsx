import React from "react";
import { Button, Space, Tag, Tooltip } from "antd"
import { dateFormate } from "../../../utils/optimizationFunction"
import { FaEdit, FaEye, FaTrash, FaUserLock } from "react-icons/fa";

export const adminTableColumn = () => [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Date',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (_, record) => {
            return dateFormate(record.createdAt)
        }
    },
    {
        title: 'Status',
        dataIndex: 'isBlocked',
        key: 'isBlocked',
        render: (_, record) => {
            return record.isBlocked ? <Tag color="red">Blocked</Tag> : <Tag color="green">Not Blocked</Tag>
        }
    },
    {
        title: 'Action',
        render: (_, record) => {
            return (
                <Space>
                    <Tooltip title="Block"><Button style={{ backgroundColor: "#FFBA00", color: "white" }} shape="circle" icon={<FaUserLock />} type="primary" onClick={() => handleBlock(record._id)} /></Tooltip>
                    <Tooltip title="Delete"><Button style={{ backgroundColor: "#FFBA00", color: "white" }} shape="circle" icon={<FaTrash />} type="primary" onClick={() => handleDelete(record._id)} /></Tooltip>
                    <Tooltip title="Edit"><Button style={{ backgroundColor: "#FFBA00", color: "white" }} shape="circle" icon={<FaEdit />} type="primary" onClick={() => handleEdit(record._id)} /></Tooltip>
                    <Tooltip title="View"><Button style={{ backgroundColor: "#FFBA00", color: "white" }} shape="circle" icon={<FaEye />} type="primary" onClick={() => handleView(record._id)} /></Tooltip>
                </Space>
            )
        }
    }
]