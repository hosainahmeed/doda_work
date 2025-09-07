import React from 'react'
import { Button, Space, Tooltip } from 'antd'
import UserImage from '../../../components/user/UserImage'

export const signupRequestColumn = ({ onView, handleDelete, handleAccept }) => [
    {
        title: "User",
        dataIndex: "name",
        key: "name",
        render: (text, record) => (
            <UserImage user={{ name: text, avatar: record.avatar, email: record.email }} />
        ),
    },
    {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
    },
    {
        title: "Company Name",
        dataIndex: "company_name",
        key: "company_name",
    },
    {
        title: "Category",
        dataIndex: "category",
        key: "category",
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
                <Tooltip title="View">
                    <Button
                        onClick={() => onView(record)}
                        shape="default"
                        style={{ backgroundColor: "#FFBA00", color: "white" }}
                    >View</Button></Tooltip>
                <Tooltip title="Delete">
                    <Button
                        onClick={() => handleDelete(record?._id)}
                        shape="default"
                        style={{ backgroundColor: "#FFBA00", color: "white" }}
                    >Reject</Button></Tooltip>
                <Tooltip title="Block">
                    <Button
                        onClick={() => handleAccept(record?._id)}
                        shape="default"
                        style={{ backgroundColor: "#FFBA00", color: "white" }}
                    >Accept</Button></Tooltip>
            </Space>
        ),
    },
]