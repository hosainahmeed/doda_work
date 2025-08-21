import React from "react";
import { PageLayout, PageContent } from "../../components/PageLayout";
import StatusCard from "./components/StatusCard";
import user from "../../assets/user.svg";
import total_requests from "../../assets/total_request.svg";
import total_income from "../../assets/income.svg";
import service_providers from "../../assets/service_provider.svg";
import RequestsTrend from "../../components/charts/RequestsTrend";
import CompletionRate from "../../components/charts/CompletionRate";

const Dashboard = () => {
  const data = [
    {
      title: "Total Users",
      number: 340,
      icon: user,
    },
    {
      title: "Total Requests",
      number: 120,
      icon: total_requests,
    },
    {
      title: "Total Income",
      number: 120,
      icon: total_income,
    },
    {
      title: "Service Provdiers",
      number: 213,
      icon: service_providers,
    },
  ];
  return (
    <PageLayout>
      <PageContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <StatusCard item={item} key={index} />
          ))}
        </div>
        <div className="bg-[var(--primary-color)] border border-gray-200/40 rounded-lg shadow mt-6">
          <div className="w-full h-[420px] p-4 grid grid-cols-2 gap-4">
            <RequestsTrend />
            <CompletionRate />
          </div>
        </div>
      </PageContent>
    </PageLayout>
  );
};

export default Dashboard;
