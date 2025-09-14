import { Card, Modal } from 'antd'
import React from 'react'
import { BsCalendarHeartFill, BsPersonBoundingBox } from 'react-icons/bs'
import { CgTime } from 'react-icons/cg'
import { FaAddressBook, FaBuilding, FaGlobe } from 'react-icons/fa'
import { MdCategory, MdRoomService } from 'react-icons/md'


const Info = ({ title, value, icon }) => {
  return (
    <p className='text-gray-600 font-medium flex items-center gap-2'>{icon}{title}: <span className='text-[var(--primary-color)]'>{value}</span></p>
  )
}

function ServiceProviderDetails({ open = false, hide, record }) {
  const InfoData = [
    { title: "Company name", value: record?.company_name, icon: <FaBuilding /> },
    { title: "Company address", value: record?.company_address, icon: <FaAddressBook /> },
    { title: "Web site", value: record?.website_link, icon: <FaGlobe /> },
    { title: "Service Category", value: record?.category, icon: <MdRoomService /> },
    { title: "Subcategory", value: record?.sub_category, icon: <MdCategory /> },
    { title: "Working hours", value: record?.working_hours, icon: <CgTime /> },
    { title: "Weekend", value: record?.weekend, icon: <BsCalendarHeartFill /> },
    { title: "Contact person", value: record?.contact_person, icon: <BsPersonBoundingBox /> },
  ]
  return (
    <Modal width={800} centered open={open} footer={null} onCancel={() => hide(false)}>
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
          <Info key={index} title={item.title} value={item.value} icon={item.icon} />
        ))}
      </Card>
      <Card style={{ marginTop: "1rem" }}>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <h1 className='text-lg font-semibold'>License</h1>
            <img src={record?.certificate} alt={record?.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className='text-lg font-semibold'>Certificate</h1>
            <img src={record?.license} alt={record?.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </Card>
    </Modal>
  )
}

export default ServiceProviderDetails