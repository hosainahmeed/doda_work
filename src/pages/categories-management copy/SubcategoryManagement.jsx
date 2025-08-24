import React from "react";
import { PageContent, PageLayout } from "../../components/PageLayout";
import SubcategoryManageTable from "./subcategory_management_component/SubcategoryManageTable";

function SubcategoryManagement() {
  return (
    <PageLayout title={"Subcategories Management"}>
      <PageContent>
        <SubcategoryManageTable />
      </PageContent>
    </PageLayout>
  );
}

export default SubcategoryManagement;
