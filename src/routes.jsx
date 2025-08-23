import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import UserManagement from "./pages/user-management/UserManagement";
import Categories from "./pages/categories/Categories";
import FAQ from "./pages/faq/FAQ";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import TermsAndConditions from "./pages/terms/TermsAndConditions";
import ContactUs from "./pages/contact/ContactUs";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import VerifyOTP from "./pages/auth/VerifyOTP";
import ResetPassword from "./pages/auth/ResetPassword";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/NotFound";
import AwaitingRequests from "./pages/awaiting-requests/AwaitingRequests";
import ServiceProvider from "./pages/service-provider/ServiceProvider";
import CategoriesManagement from "./pages/categories-management/CategoriesManagement";
import ApprovalSection from "./pages/approval-section/ApprovalSection";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOTP />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
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
        path: "approval-section",
        element: <ApprovalSection />,
      },
      {
        path: "categories",
        element: <Categories />,
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
  },
]);
