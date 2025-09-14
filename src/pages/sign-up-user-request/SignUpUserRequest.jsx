import React, { useCallback, useState } from 'react'
import { PageContent, PageLayout } from '../../components/PageLayout'
import { Modal, Table } from 'antd'
import { signupRequestColumn } from './sign_up_request_component/SignupRequestColumn'
import RequestedUser from './sign_up_request_component/RequestedUser'

function SignUpUserRequest() {
  const adminData = [
    {
      _id: "1",
      name: 'Hosain',
      email: 'hosain@gmail.com',
      website_link: 'https://hosain.com',
      company_name: 'Hosain',
      category: 'Plumbing',
      sub_category: 'Pipe Repair',
      working_hours: '9 AM - 5 PM',
      weekend: 'Saturday',
      contact_person: 'Hosain',
      avatar: 'https://avatar.iran.liara.run/public/13',
      phone: '123-456-7890',
      createdAt: "2023-01-01",
    }
  ]
  const [record, setRecord] = useState(null)
  const handleView = (record) => {
    console.log(record)
    setRecord(record)
    setOpen(true)
  }
  const handleDelete = (id) => {
    alert("delete", id)
  }
  const handleAccept = (id) => {
    alert("accept", id)
  }
  const [open, setOpen] = useState(false)
  const hide = useCallback((value) => {
    setOpen(!value)
  }, [])

  return (
    <PageLayout title="New Providers Awaiting Approval">
      <PageContent>
        <SignupRequestTable adminData={adminData} handleDelete={handleDelete} handleAccept={handleAccept} handleView={handleView} />
      </PageContent>
      <Modal
        title="Requested User"
        open={open}
        centered
        onCancel={hide}
        footer={null}
        destroyOnClose
      >
        <RequestedUser record={record} />
      </Modal>
    </PageLayout>
  )
}

export default SignUpUserRequest

const SignupRequestTable = ({ adminData, handleDelete, handleAccept, handleView }) => {
  return (
    <Table
      scroll={{ x: "max-content" }}
      columns={signupRequestColumn({ onView: handleView, handleDelete, handleAccept })}
      dataSource={adminData}
      pagination={false}
    />
  )
}

