import React, { useCallback, useState } from "react";
import { Table, Modal, message } from "antd";
import { userManageColumns } from "./userManageColumns";
import SearchInput from "../../../components/common/SearchInput";
import UserDeailsCard from "./UserDeailsCard";

function UserManageTable() {
  const [selectedUser, setSelectedUser] = useState(null);
  const data = [
    {
      key: "1",
      request_details: {
        request_id: "12333",
        service_type: "Plumbing",
        date_time: "2 Aug 2025 2:30 PM",
        priority: "Urgency",
        service_image_or_video: "https://cdn.pixabay.com/video/2021/07/08/80694-572838379_large.mp4",
        video: true,
      },
      user_profile: {
        _id: "1",
        name: "Jacob Jones",
        email: "lawson@example.com",
        phone: "(406) 555-0120",
        location: "Dhaka, Banani",
        avatar: "https://avatar.iran.liara.run/public/50",
      },
    },
    {
      key: "2",
      request_details: {
        request_id: "12333",
        service_type: "Plumbing",
        date_time: "2 Aug 2025 2:30 PM",
        priority: "Urgency",
        service_image_or_video: "https://cdn.pixabay.com/photo/2016/07/12/09/31/package-1511683_1280.jpg",
        video: false,
      },
      user_profile: {
        _id: "2",
        name: "Jacob Jones",
        email: "lawson@example.com",
        phone: "(406) 555-0120",
        location: "Dhaka, Banani",
        avatar: "https://avatar.iran.liara.run/public/50",
      },
    },
  ];

  const handleView = useCallback((record) => {
    setSelectedUser(record);
  }, []);

  const handleBlock = useCallback((record) => {
    alert(`${record.user_profile.name} blocked successfully`);
  }, []);

  return (
    <div>
      <SearchInput className="mb-4" placeholder="Search by Email" />
      <Table
        columns={userManageColumns(handleView, handleBlock)}
        dataSource={data}
        pagination={false}
        scroll={{ x: "max-content" }}
        size="large"
        bordered
        rowKey="key"
      />
      <Modal
        open={!!selectedUser}
        footer={null}
        onCancel={() => setSelectedUser(null)}
        centered
        width={500}
      >
        {selectedUser && <UserDeailsCard {...selectedUser} />}
      </Modal>
    </div>
  );
}

export default UserManageTable;
