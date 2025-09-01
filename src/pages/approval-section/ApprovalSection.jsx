import React from "react";
import { PageContent, PageLayout } from "../../components/PageLayout";
import ApprovalSectionTable from "./approval_section_component/ApprovalSectionTable";

function ApprovalSection() {
  return (
    <PageLayout title={"Approval Section"}>
      <PageContent>
        <ApprovalSectionTable />
      </PageContent>
    </PageLayout>
  );
}

export default ApprovalSection;
