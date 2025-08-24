import React from "react";
import { PageContent, PageLayout } from "../../components/PageLayout";
import CategoryManageTable from "./category_management_component/CategoryManageTable";

function CategoriesManagement() {
  return (
    <PageLayout title={"Categories Management"}>
      <PageContent>
        <CategoryManageTable />
      </PageContent>
    </PageLayout>
  );
}

export default CategoriesManagement;
