import React, { useCallback } from "react";
import { Table } from "antd";
import { awaitingRequestsColumns } from "./awaitingRequestsColumns";
function AwaitingRequeststable() {
  const data = [
    {
      request_id: "#121211",
      key: "1",
      name: "John Doe",
      category: "Cleaning",
      email: "7o4wP@example.com",
      phone: "123-456-7890",
      date: "2022-01-01",
      time: "10:00 AM",
      priority: "High",
      status: "Pending",
      avatar: "https://avatar.iran.liara.run/public/13",
      action: "View",
      video: false,
      service_image_or_video:
        "https://belasea.sgp1.digitaloceanspaces.com/media/products/CeraVe-Daily-Moisturising-Lotion-For-Normal-To-Dry-Skin-355ml-USA.png",
    },
    {
      request_id: "#121212",
      key: "2",
      name: "Jane Smith",
      category: "Repair",
      email: "demo@example.com",
      phone: "987-654-3210",
      date: "2022-02-05",
      time: "2:00 PM",
      priority: "Low",
      status: "Rejected",
      avatar: "https://avatar.iran.liara.run/public/20",
      action: "View",
      video: false,
      service_image_or_video:
        "https://belasea.sgp1.digitaloceanspaces.com/media/products/CeraVe-Daily-Moisturising-Lotion-For-Normal-To-Dry-Skin-355ml-USA.png",
    },
  ];

  const handleView = useCallback((record) => {
    console.log("details", record);
  }, []);

  return (
    <div>
      <div>
        
      </div>
      <Table
        columns={awaitingRequestsColumns(handleView)}
        dataSource={data}
        pagination={{ pageSize: 5, position: ["bottomCenter"] }}
        scroll={{ x: "max-content" }}
        size="large"
        bordered
      />
    </div>
  );
}

export default AwaitingRequeststable;
