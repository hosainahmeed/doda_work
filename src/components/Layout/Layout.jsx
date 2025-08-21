import React, { useState, useRef, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// import { FiChevronDown, FiUser, FiLogOut, FiSettings } from 'react-icons/fi';
// import Notifications from '../Notifications/Notifications';
import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';
import MainSidebar from './MainSidebar';
import Header from './Header';

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef(null);

    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        role: 'Administrator'
    });

    const isActive = (path) => {
        return location.pathname === path ? 'bg-[#FFBA00] text-white' : 'text-gray-300 hover:bg-gray-700';
    };
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                if (!event.target.closest('.profile-image-trigger')) {
                    setIsProfileOpen(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (    
        <div className="flex h-screen bg-gray-100">
            {/* Mobile sidebar backdrop */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-20  bg-opacity-50 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <MainSidebar />

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
