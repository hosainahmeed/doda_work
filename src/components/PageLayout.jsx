import React from "react";
import cn from "../lib/cn";

export const PageLayout = ({ title, children, className }) => {
  return (
    <div className={cn("p-3 w-full", className)}>
      {title && (
        <h1 className="text-2xl font-bold text-gray-800 mb-6">{title}</h1>
      )}
      <div className="bg-white rounded shadow p-6">{children}</div>
    </div>
  );
};

export const PageContent = ({ children }) => {
  return <div className="space-y-4">{children}</div>;
};
