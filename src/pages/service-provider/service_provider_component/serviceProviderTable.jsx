import React, { useCallback, useState } from "react";
import { Table } from "antd";
import SearchInput from "../../../components/common/SearchInput";
import { serviceProviderColumns } from "./serviceProviderColumns";
import ServiceProviderDetails from "./ServiceProviderDetails";
function ServiceProviderTable() {
    const [open, setOpen] = useState(false)
    const [record, setRecord] = useState(null)
    const hide = useCallback((value) => {
        setOpen(value)
    }, [])
  const data = [
    {
      request_id: "#121211",
      key: "1",
      name: "John Doe",
      email: "7o4wP@example.com",
      phone: "123-456-7890",
      status: "Pending",
      company_name: "John Doe",
      company_address: "Dhaka, Banani",
      category: "Plumbing",
      sub_category: "Pipe Repair",
      working_hours: "9 AM - 5 PM",
      weekend: "Saturday",
      contact_person: "John Doe",
      avatar: "https://avatar.iran.liara.run/public/13",
      website_link: "https://www.google.com",
      certificate: "https://m.media-amazon.com/images/I/719S52YjtmL.jpg",
      license: "https://d1hv7ee95zft1i.cloudfront.net/custom/blog-post-photo/gallery/philippine-drivers-license-5fc9f1eb3b9f9.jpg",
    },
    {
      request_id: "#121212",
      key: "2",
      name: "Jane Smith",
      email: "demo@example.com",
      phone: "987-654-3210",
      status: "Rejected",
      company_name: "John Doe",
      company_address: "Dhaka, Banani",
      category: "Plumbing",
      sub_category: "Pipe Repair",
      working_hours: "9 AM - 5 PM",
      weekend: "Saturday",
      contact_person: "John Doe",
      avatar: "https://avatar.iran.liara.run/public/20",
      website_link: "https://www.google.com",
      certificate: "https://m.media-amazon.com/images/I/719S52YjtmL.jpg",
      license: "https://d1hv7ee95zft1i.cloudfront.net/custom/blog-post-photo/gallery/philippine-drivers-license-5fc9f1eb3b9f9.jpg",
    },
  ];

  const handleView = useCallback((record) => {
    console.log("details", record);
    setRecord(record)
    setOpen(true)
  }, []);

  return (
    <div>
      <SearchInput className="mb-4" placeholder="Search by Email" />
      <Table
        columns={serviceProviderColumns(handleView)}
        dataSource={data}
        pagination={false}
        scroll={{ x: "max-content" }}
        size="large"
        bordered
      />
      <ServiceProviderDetails open={open} hide={hide} record={record} />
    </div>
  );
}

export default ServiceProviderTable;
