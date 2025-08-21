import React, { useState } from "react";
import { FaQuestionCircle, FaTimes, FaUserCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiList,
  FiImage,
  FiLock,
  FiFileText,
  FiPhone,
} from "react-icons/fi";
import main_logo from "../../assets/main_logo.svg";

function MainSidebar() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const menuItems = [
    { path: "/", name: "Dashboard", icon: <FiHome className="h-5 w-5" /> },
    {
      path: "/user-management",
      name: "User Management",
      icon: <FiUsers className="h-5 w-5" />,
    },
    {
      path: "/service-provider",
      name: "Service Provider",
      icon: <FaUserCog className="h-5 w-5" />,
    },
    {
      path: "/categories-management",
      name: "Category Management",
      icon: <FiList className="h-5 w-5" />,
    },
    {
      path: "/approval-section",
      name: "Approval section",
      icon: <FiImage className="h-5 w-5" />,
    },
    {
      path: "/faq",
      name: "FAQ",
      icon: <FaQuestionCircle className="h-5 w-5" />,
    },
    {
      path: "/privacy-policy",
      name: "Privacy Policy",
      icon: <FiLock className="h-5 w-5" />,
    },
    {
      path: "/terms",
      name: "Terms & Conditions",
      icon: <FiFileText className="h-5 w-5" />,
    },
    {
      path: "/contact",
      name: "Contact Us",
      icon: <FiPhone className="h-5 w-5" />,
    },
  ];
  const isActive = (path) =>
    location.pathname === path ? "bg-[var(--secondary-color)]" : "";
  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-[var(--primary-color)] text-white transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-20 items-center justify-between px-4">
        <div className="flex items-center w-14 h-14 gap-2">
          <img src={main_logo} alt="Doda_logo" />
          <h1 className="text-xl font-bold">Dodawork</h1>
        </div>
        <button
          onClick={toggleSidebar}
          className="rounded-md p-1 text-gray-400 hover:bg-gray-700 lg:hidden"
        >
          <FaTimes className="h-6 w-6" />
        </button>
      </div>
      <nav className="mt-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path} className="mb-1">
              <NavLink
                to={item.path}
                className={`flex items-center px-4 py-3 ${isActive(
                  item.path
                )} rounded-md mx-2 transition-colors`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MainSidebar;
