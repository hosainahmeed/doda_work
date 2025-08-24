import React, { useCallback } from "react";
import { Table } from "antd";
import { categoryManageColumns } from "./categoryManageColumns";
import CustomButton from "../../../components/common/CustomButton";
function CategoryManageTable() {
  const data = [
    {
      request_id: "#121211",
      key: "1",
      name: "category",
      sub_category: 3,
      status: "Pending",
      avatar: "https://avatar.iran.liara.run/public/13",
    },
    {
      request_id: "#121212",
      key: "2",
      name: "category2",
      sub_category: 5,
      status: "Rejected",
      avatar: "https://avatar.iran.liara.run/public/20",
    },
  ];

  const handleView = useCallback((record) => {
    console.log("details", record);
  }, []);

  const handleAddCategory = useCallback(() => {
    console.log("Add Category");
  }, []);

  return (
    <div>
      <CustomButton onClick={handleAddCategory} title="Add Category" icon="plus" />
      <Table
        columns={categoryManageColumns(handleView)}
        dataSource={data}
        pagination={{ pageSize: 5, position: ["bottomCenter"] }}
        scroll={{ x: "max-content" }}
        size="large"
        bordered
      />
    </div>
  );
}

export default CategoryManageTable;
