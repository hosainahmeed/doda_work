import React, { useCallback, useState } from 'react'
import { Card, Divider, Button } from 'antd'
import rejected from "../../../assets/rejected.svg"
import approved from "../../../assets/approved.png"
import MatchProviderList from '../../../components/common/MatchProviderList'

const MatchedServicesDetailsCard = ({ record, handleCancel, loading = false }) => {
  const [open, setOpen] = useState(false)
  const handleMatch = useCallback(() => {
    setOpen(true)
  }, [])

  return (
    <div>
      <Card>
        <div className='relative'>
          {record?.status === "Rejected" && <div className='absolute w-20 h-20 bottom-24 right-4'>
            <img src={rejected} alt={record?.name} className="w-full -rotate-12 h-full object-contain rounded" />
          </div>}
          {record?.status === "Approved" && <div className='absolute w-20 h-20 bottom-24 right-4'>
            <img src={approved} alt={record?.name} className="w-full -rotate-12 h-full object-contain rounded" />
          </div>}
          {/* User Info */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-24 h-20">
              <img
                src={record?.avatar}
                alt={record?.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="w-full">
              <h2 className="font-semibold text-lg">{record?.name}</h2>
              <p className="text-gray-600">{record?.email}</p>
              <p className="text-gray-600">{record?.phone}</p>
              <p className="text-gray-500 text-sm">{record?.category}</p>
            </div>
          </div>

          <Divider />

          {/* Request Details */}
          <div className="mb-4">
            <h3 className="font-semibold text-base mb-2">Request Details</h3>
            <p>
              <span className="font-medium text-base text-[var(--primary-color)]">
                Request ID:
              </span> {record?.request_id}
            </p>
            <p>
              <span className="font-medium text-base text-[var(--primary-color)]">
                Service Type:
              </span> {record?.category}
            </p>
            <p>
              <span className="font-medium text-base text-[var(--primary-color)]">
                Date & Time:
              </span> {record?.date} {record?.time}
            </p>
            <p>
              <span className="font-medium text-base text-[var(--primary-color)]">
                Priority:
              </span> {record?.priority}
            </p>
            <p>
              <span className="font-medium text-base text-[var(--primary-color)]">
                Status:
              </span> {record?.status}
            </p>
          </div>

          {/* Service Image / Video */}
          <div className="mb-4">
            <h3 className="font-semibold text-base mb-2">Service Media</h3>
            <div className='border border-slate-100 p-4'>
              {record?.video ? (
                <video
                  controls
                  src={record?.service_image_or_video}
                  className="w-72 h-40 object-cover rounded"
                />
              ) : (
                <img
                  src={record?.service_image_or_video}
                  alt="Service"
                  className="w-72 h-40 object-contain rounded"
                />
              )}
            </div>
          </div>

          <Divider />

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              onClick={() => handleMatch()}
              style={{ backgroundColor: "var(--primary-color)", color: "#fff" }}
            >
              Match Provider
            </Button>
            <Button
              loading={loading}
              onClick={() => handleCancel(record)}
              style={{ backgroundColor: "red", color: "#fff" }}
            >
              Cancel Request
            </Button>
          </div>
        </div>
      </Card>
      <MatchProviderList open={open} hide={setOpen} />
    </div>
  )
}


export default MatchedServicesDetailsCard