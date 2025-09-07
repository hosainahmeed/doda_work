import React from "react";
import {
    FiHome,
    FiUsers,
    FiList,
    FiLock,
    FiFileText,
    FiUser,
} from "react-icons/fi";
import {
    FaStopwatch,
    FaUserCog,
    FaQuestionCircle,
    FaUser as FaUserSolid,
} from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { MdHomeRepairService } from "react-icons/md";

export const menuItems = [
    // 🔹 Dashboard
    { path: "/", name: "Dashboard", icon: <FiHome className="h-5 w-5" /> },

    // 🔹 Core Features
    {
        path: "/awaiting-requests",
        name: "Awaiting Requests",
        icon: <FaStopwatch className="h-5 w-5" />,
    },
    {
        path: "/matched-services",
        name: "All Services",
        icon: <MdHomeRepairService className="h-5 w-5" />,
    },
    {
        path: "/service-provider",
        name: "Service Provider",
        icon: <FaUserCog className="h-5 w-5" />,
    },
    {
        path: "/sign-up-user-request",
        name: "Sign Up Request",
        icon: <FaUserSolid className="h-5 w-5" />,
    },

    // 🔹 Management
    {
        path: "/user-management",
        name: "User Management",
        icon: <FiUsers className="h-5 w-5" />,
    },
    {
        path: "/categories-management",
        name: "Category Management",
        icon: <FiList className="h-5 w-5" />,
    },
    {
        path: "/admin",
        name: "Admin Management",
        icon: <RiAdminFill className="h-5 w-5" />,
    },

    // 🔹 Support / Help
    {
        path: "/faq",
        name: "FAQ",
        icon: <FaQuestionCircle className="h-5 w-5" />,
    },

    // 🔹 Legal
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

    // 🔹 User
    {
        path: "/profile",
        name: "Profile",
        icon: <FiUser className="h-5 w-5" />,
    },
];
