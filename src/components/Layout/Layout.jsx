import React, { useState, useRef, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ProfileSidebar from "../ProfileSidebar/ProfileSidebar";
import MainSidebar from "./MainSidebar";
import Header from "./Header";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "Administrator",
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        if (!event.target.closest(".profile-image-trigger")) {
          setIsProfileOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // if (location.pathname === "/test") {
  //   return <Outlet />;
  // }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 lg:hidden z-20"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <MainSidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top navbar */}
        <Header user={user} toggleSidebar={toggleSidebar} />

        {/* Page content */}
        <main className="flex-1 bg-gray-100 overflow-y-auto p-4 lg:ml-64">
          <div className="mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
      {/* Profile Sidebar for Mobile */}
      <ProfileSidebar
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        user={user}
      />
    </div>
  );
};

export default Layout;
