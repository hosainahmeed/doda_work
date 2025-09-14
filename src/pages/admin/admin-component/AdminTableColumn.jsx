import React from "react";
import { Button, Popconfirm, Space, Tag, Tooltip } from "antd"
import { dateFormate } from "../../../utils/optimizationFunction"
import { FaEdit, FaTrash, FaUserLock } from "react-icons/fa";
import cn from "../../../lib/cn";
import UserImage from "../../../components/user/UserImage";

export const adminTableColumn = ({ handleBlock, handleDelete, handleEdit }) => [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (_, record) => (
            <UserImage user={{ name: record.name, avatar: record.avatar }} />
        )
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
                    <Tooltip title={record.isBlocked ? "Unblock" : "Block"}>
                        <Button
                            style={{
                                backgroundColor: "#FFBA00",
                                color: "white"
                            }}
                            className={cn("", record.isBlocked && "!bg-gray-500")}
                            shape="circle"
                            icon={<FaUserLock />}
                            type="primary"
                            onClick={() => handleBlock(record._id)}
                        />
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Popconfirm
                            title="Are you sure to delete this admin?"
                            placement="topRight"
                            okButtonProps={{
                                style: {
                                    backgroundColor: "red",
                                    color: "white"
                                }
                            }}
                            onConfirm={() => handleDelete(record._id)}
                        >
                            <Button
                                style={{
                                    backgroundColor: "red",
                                    color: "white"
                                }}
                                shape="circle"
                                icon={<FaTrash />}
                                type="primary"
                            />
                        </Popconfirm>
                    </Tooltip>
                    <Tooltip
                        title="Edit"><Button
                            style={{
                                backgroundColor: "#F57C00",
                                color: "white"

                            }}
                            shape="circle"
                            icon={<FaEdit />}
                            type="primary"
                            onClick={() => handleEdit(record)}
                        /></Tooltip>
                </Space>
            )
        }
    }
]