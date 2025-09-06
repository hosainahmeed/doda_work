import { Card, Modal } from 'antd'
import React from 'react'


const Info = ({ title, value }) => {
  return (
    <h1 className='text-lg font-semibold'>{title}: <span className='text-[var(--primary-color)]'>{value}</span></h1>
  )
}

function ServiceProviderDetails({ open = false, hide, record }) {
  const InfoData = [
    { title: "Company name", value: record?.company_name },
    { title: "Company address", value: record?.company_address },
    { title: "Web site", value: record?.website_link },
    { title: "Service Category", value: record?.category },
    { title: "Subcategory", value: record?.sub_category },
    { title: "Working hours", value: record?.working_hours },
    { title: "Weekend", value: record?.weekend },
    { title: "Contact person", value: record?.contact_person },
  ]
  return (
    <Modal centered open={open} footer={null} onCancel={() => hide(false)}>
      <Card>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-24 h-20">
            <img src={record?.avatar} alt={record?.name} className="w-full h-full object-cover" />
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-lg">{record?.name}</h2>
            <p className="text-gray-600">{record?.email}</p>
            <p className="text-gray-600">{record?.phone}</p>
            <p className="text-gray-500 text-sm">{record?.location}</p>
          </div>
        </div>
      </Card>
      <Card style={{ marginTop: "1rem" }}>
        {InfoData.map((item, index) => (
          <Info key={index} title={item.title} value={item.value} />
        ))}
      </Card>
    </Modal>
  )
}

export default ServiceProviderDetails