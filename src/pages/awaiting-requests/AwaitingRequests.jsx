import React from "react";
import { PageContent, PageLayout } from "../../components/PageLayout";
import AwaitingRequeststable from "./request_component/AwaitingRequeststable";

function AwaitingRequests() {
  return (
    <PageLayout title={"Awaiting Requests"}>
      <PageContent>
        <AwaitingRequeststable />
      </PageContent>
    </PageLayout>
  );
}

export default AwaitingRequests;
