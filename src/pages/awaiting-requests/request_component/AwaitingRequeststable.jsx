// AwaitingRequeststable.jsx
import React from "react";
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
  ];

  const handleView = (record) => {
    console.log("View record:", record.key);
  };

  return (
    <Table
      columns={awaitingRequestsColumns(handleView)}
      dataSource={data}
      pagination={{ pageSize: 5, position: ["bottomCenter"] }}
      scroll={{ x: "max-content" }}
      size="large"
      bordered
    />
  );
}

export default AwaitingRequeststable;
