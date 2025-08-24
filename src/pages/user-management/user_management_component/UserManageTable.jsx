import React, { useCallback } from "react";
import { Table } from "antd";
import { userManageColumns } from "./userManageColumns";
import SearchInput from "../../../components/common/SearchInput";
function UserManageTable() {
  const data = [
    {
      request_id: "#121211",
      key: "1",
      name: "John Doe",
      email: "7o4wP@example.com",
      phone: "123-456-7890",
      status: "Pending",
      avatar: "https://avatar.iran.liara.run/public/13",
    },
    {
      request_id: "#121212",
      key: "2",
      name: "Jane Smith",
      email: "demo@example.com",
      phone: "987-654-3210",
      status: "Rejected",
      avatar: "https://avatar.iran.liara.run/public/20",
    },
  ];

  const handleView = useCallback((record) => {
    console.log("details", record);
  }, []);

  return (
    <div>
      <SearchInput className="mb-4" placeholder="Search by Email" />
      <Table
        columns={userManageColumns(handleView)}
        dataSource={data}
        pagination={{ pageSize: 5, position: ["bottomCenter"] }}
        scroll={{ x: "max-content" }}
        size="large"
        bordered
      />
    </div>
  );
}

export default UserManageTable;
