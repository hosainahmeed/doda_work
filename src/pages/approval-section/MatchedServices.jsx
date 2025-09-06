import React from "react";
import { PageContent, PageLayout } from "../../components/PageLayout";
import MatchedServicesTable from "./complete_section_component/MatchedServicesTable";

function MatchedServices() {
  return (
    <PageLayout title={"All Services"}>
      <PageContent>
        <MatchedServicesTable />
      </PageContent>
    </PageLayout>
  );
}

export default MatchedServices;
