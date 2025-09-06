import React, { useState } from "react";
import { PageLayout, PageContent } from "../../components/PageLayout";
import JoditComponent from "../../components/common/JoditComponent";
import { Button } from "antd";

const TermsAndConditions = () => {
  const [content, setContent] = useState('');
  return (
    <PageLayout title="Terms and Conditions">
      <PageContent>
        <JoditComponent setContent={setContent} content={content} />
        <Button
          size="large"
          onClick={() => alert("Update Coming Soon")}
          className="max-w-48 app sidebar-button-black"
        >
          Submit
        </Button>
      </PageContent>
    </PageLayout>
  );
};

export default TermsAndConditions;
