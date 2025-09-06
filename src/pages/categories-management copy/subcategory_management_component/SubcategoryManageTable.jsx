import React, { useCallback, useState } from "react";
import { Table } from "antd";
import { subCategoryManageColumns } from "./subCategoryManageColumns";
import CustomButton from "../../../components/common/CustomButton";
import CategoryForm from "../../categories-management/category_management_component/CategoryForm";
import BackButton from "../../../components/common/BackButton";

function SubcategoryManageTable() {
  const [addCategoryModalVisible, setAddCategoryModalVisible] = useState(false)
  const [updateCategoryModalVisible, setUpdateCategoryModalVisible] = useState(false)
  const [record, setRecord] = useState(null)
  const data = [
    {
      _id: "1",
      request_id: "#121211",
      key: "1",
      name: "sub category",
      status: "Pending",
      avatar: "https://avatar.iran.liara.run/public/13",
    },
    {
      _id: "2",
      request_id: "#121212",
      key: "2",
      name: "sub category 2",
      status: "Rejected",
      avatar: "https://avatar.iran.liara.run/public/20",
    },
  ];

  const handleAddCategory = useCallback(() => {
    setAddCategoryModalVisible(true)
  }, []);

  const handleEditCategory = useCallback((record) => {
    setUpdateCategoryModalVisible(true)
    setRecord(record)
  }, []);

  const handleDeleteCategory = useCallback((record) => {
    console.log("Delete Category", record);
  }, []);

  const handleSubmitCategory = useCallback((values) => {
    console.log("Submit Category", values);
  }, []);

  return (
    <div>
      <BackButton message="Back to Categories" className="mb-5 hover:text-[#F57C00]" />
      <CustomButton onClick={handleAddCategory} title="Add Sub Category" icon="plus" />
      <Table
        columns={subCategoryManageColumns(handleEditCategory, handleDeleteCategory)}
        dataSource={data}
        pagination={false}
        scroll={{ x: "max-content" }}
        size="large"
        bordered
      />
      <CategoryForm
        open={addCategoryModalVisible}
        hide={setAddCategoryModalVisible}
        onFinish={handleSubmitCategory}
        title="Add Sub Category"
      />
      <CategoryForm
        record={record}
        open={updateCategoryModalVisible}
        hide={setUpdateCategoryModalVisible}
        onFinish={handleSubmitCategory}
        title="Update Sub Category"
      />
    </div>
  );
}

export default SubcategoryManageTable;
