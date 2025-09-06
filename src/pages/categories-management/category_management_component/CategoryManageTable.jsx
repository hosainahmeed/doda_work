import React, { useCallback, useState } from "react";
import { Table } from "antd";
import { categoryManageColumns } from "./categoryManageColumns";
import CustomButton from "../../../components/common/CustomButton";
import CategoryForm from "./CategoryForm";
import { useNavigate } from "react-router-dom";
function CategoryManageTable() {
  const navigate = useNavigate()
  const [addCategoryModalVisible, setAddCategoryModalVisible] = useState(false)
  const [updateCategoryModalVisible, setUpdateCategoryModalVisible] = useState(false)
  const [record, setRecord] = useState(null)
  const data = [
    {
      _id: "1",
      request_id: "#121211",
      key: "1",
      name: "category",
      sub_category: 2,
      status: "Pending",
      avatar: "https://avatar.iran.liara.run/public/13",
    },
    {
      _id: "2",
      request_id: "#121212",
      key: "2",
      name: "category2",
      sub_category: 2,
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

  const handleNavigate = useCallback((id) => {
    console.log("Navigate", id);
    navigate(`/categories-management/sub-category/${id}`);
  }, []);

  const handleSubmitCategory = useCallback((values) => {
    console.log("Submit Category", values);
  }, []);

  return (
    <div>
      <CustomButton onClick={handleAddCategory} title="Add Category" icon="plus" />
      <Table
        columns={categoryManageColumns(handleEditCategory, handleDeleteCategory, handleNavigate)}
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
        title="Add Category"
      />
      <CategoryForm
        record={record}
        open={updateCategoryModalVisible}
        hide={setUpdateCategoryModalVisible}
        onFinish={handleSubmitCategory}
        title="Update Category"
      />
    </div>
  );
}

export default CategoryManageTable;
