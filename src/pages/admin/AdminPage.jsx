import React, { useCallback, useEffect, useState } from 'react'
import { PageLayout, PageContent } from '../../components/PageLayout'
import { Button, Input, Modal, Table } from 'antd'
import { adminTableColumn } from './admin-component/AdminTableColumn'
import { FaPlus } from 'react-icons/fa'
import AdminForm from './admin-component/AdminForm'
import { perfectImageReturn } from '../../utils/optimizationFunction'
import ImageUploader from '../../components/common/ImageUploader'

function AdminPage() {
    const data = [
        {
            _id: "1",
            name: "Hosain Ahmed",
            email: "hosainahmed534745@gmail.com",
            createdAt: "2023-01-01",
            isBlocked: false,
        },
        {
            _id: "2",
            name: "Tanjim",
            email: "tanjim@gmail.com",
            createdAt: "2023-01-01",
            isBlocked: true,
        },
    ]

    const [open, setOpen] = useState(false)
    const hide = useCallback((value) => {
        setOpen(!value)
    }, [])
    const handleAddAdmin = useCallback(() => {
        setOpen(true);
    }, []);
    return (
        <PageLayout title="Admin">
            <PageContent>
                <div className='flex justify-between items-center'>
                    <Input.Search style={{ width: "260px" }} placeholder="Search" />
                    <Button
                        icon={<FaPlus />}
                        onClick={handleAddAdmin}
                        style={{ backgroundColor: "var(--primary-color)", color: "white", border: "none", borderRadius: "5px", padding: "5px 10px", fontSize: "14px", fontWeight: "bold", cursor: "pointer", transition: "all 0.3s ease-in-out", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", marginBottom: "10px", }}
                    >Add Admin</Button>
                </div>
                <AdminTable data={data} />
                <Modal
                    title="Add Admin"
                    open={open}
                    centered
                    onCancel={hide}
                    footer={null}
                    destroyOnClose
                >
                    <AdminForm open={open} hide={hide} />
                </Modal>
            </PageContent>
        </PageLayout>
    )
}

export default AdminPage


const AdminTable = ({ data }) => {
    return (
        <Table
            rowKey="_id"
            bordered
            columns={adminTableColumn()}
            dataSource={data}
            pagination={false}
        />
    )
}