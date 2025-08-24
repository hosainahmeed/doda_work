import React from "react";
import { PageContent, PageLayout } from "../../components/PageLayout";
import ServiceProviderTable from "./service_provider_component/serviceProviderTable";

function ServiceProvider() {
  return (
    <PageLayout title={"Service Provider"}>
      <PageContent>
        <ServiceProviderTable />
      </PageContent>
    </PageLayout>
  );
}

export default ServiceProvider;
