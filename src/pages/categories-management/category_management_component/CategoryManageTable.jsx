import React, { useCallback, useState } from "react";
import { Form, Input, Modal, Table } from "antd";
import { categoryManageColumns } from "./categoryManageColumns";
import CustomButton from "../../../components/common/CustomButton";
import CategoryForm from "./CategoryForm";
function CategoryManageTable() {
  const [addCategoryModalVisible, setAddCategoryModalVisible] = useState(false)
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

  const handleAddCategory = useCallback(() => {
    setAddCategoryModalVisible(true)
  }, []);

  const handleEditCategory = useCallback((record) => {
    console.log("Edit Category", record);
  }, []);

  const handleDeleteCategory = useCallback((record) => {
    console.log("Delete Category", record);
  }, []);



  return (
    <div>
      <CustomButton onClick={handleAddCategory} title="Add Category" icon="plus" />
      <Table
        columns={categoryManageColumns(handleEditCategory, handleDeleteCategory)}
        dataSource={data}
        pagination={{ pageSize: 5, position: ["bottomCenter"] }}
        scroll={{ x: "max-content" }}
        size="large"
        bordered
      />
      <CategoryForm
        addCategoryModalVisible={addCategoryModalVisible}
        setAddCategoryModalVisible={setAddCategoryModalVisible}
        title="Add Category"
      />
    </div>
  );
}

export default CategoryManageTable;
