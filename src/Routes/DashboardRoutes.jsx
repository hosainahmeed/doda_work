import React from "react";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Profile from "../pages/profile/Profile.jsx";
import UserManagement from "../pages/user-management/UserManagement.jsx";
import AwaitingRequests from "../pages/awaiting-requests/AwaitingRequests.jsx";
import ServiceProvider from "../pages/service-provider/ServiceProvider.jsx";
import CategoriesManagement from "../pages/categories-management/CategoriesManagement.jsx";
import ApprovalSection from "../pages/approval-section/ApprovalSection.jsx";
import FAQ from "../pages/faq/FAQ.jsx";
import PrivacyPolicy from "../pages/privacy-policy/PrivacyPolicy.jsx";
import TermsAndConditions from "../pages/terms/TermsAndConditions.jsx";
import ContactUs from "../pages/contact/ContactUs.jsx";
import NotFound from "../pages/NotFound.jsx";
import Layout from "../components/Layout/Layout.jsx";
import SubcategoryManagement from "../pages/categories-management copy/SubcategoryManagement.jsx";

export const DashboardRoutes = {
    path: "/",
    errorElement: <NotFound />,
    element: <Layout />,
    children: [
        {
            index: true,
            element: <Dashboard />,
        },
        {
            path: "/",
            element: <Dashboard />,
        },
        {
            path: "profile",
            element: <Profile />,
        },
        {
            path: "user-management",
            element: <UserManagement />,
        },
        {
            path: "awaiting-requests",
            element: <AwaitingRequests />,
        },
        {
            path: "service-provider",
            element: <ServiceProvider />,
        },
        {
            path: "categories-management",
            element: <CategoriesManagement />,
        },
        {
            path: "categories-management/sub-category/:id",
            element: <SubcategoryManagement />,
        },
        {
            path: "approval-section",
            element: <ApprovalSection />,
        },
        {
            path: "faq",
            element: <FAQ />,
        },
        {
            path: "privacy-policy",
            element: <PrivacyPolicy />,
        },
        {
            path: "terms",
            element: <TermsAndConditions />,
        },
        {
            path: "contact",
            element: <ContactUs />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ],
};
