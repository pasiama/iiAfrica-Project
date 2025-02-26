
import { useState } from "react";
import { Home, BookOpen, Users, Bell, Calendar, Settings, LogOut, Menu, X } from "lucide-react";
import Navbar from "@/components/dashboard/Navbar";
import NewCourses from "@/components/dashboard/NewCourses";
import HoursActivity from "@/components/dashboard/HoursActivity";
import CourseList from "@/components/dashboard/CourseList";
import CalendarSection from "@/components/dashboard/CalendarSection";
import CalendarPage from "@/components/dashboard/Calendar";
import Assignments from "@/components/dashboard/Assignments";
import MyClasses from "@/components/dashboard/MyClasses";
import MyCourses from "@/components/dashboard/MyCourses"
import Messages from "@/components/dashboard/Messages";
import NotificationPage from "@/components/dashboard/NotificationPage";
import CommunityPage from "@/components/dashboard/Community";
import SettingsPage from "@/components/dashboard/SettingsPage";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "My Courses":
        return <MyCourses/>;
      case "My Classes":
        return <MyClasses />;
      case "Messages":
        return <Messages />;
      case "Notifications":
        return <NotificationPage />;
      case "Calendars":
        return <CalendarPage />;
      case "Community":
        return <CommunityPage />;
      case "Settings":
        return <SettingsPage />;
      default:
        return (
          <>
            <NewCourses />
            <HoursActivity />
            <CourseList />
          </>
        );
    }
  };

  const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
      { label: "Dashboard", icon: <Home /> },
      { label: "My Courses", icon: <BookOpen /> },
      { label: "My Classes", icon: <Users /> },
      { label: "Messages", icon: <Bell /> },
      { label: "Notifications", icon: <Bell /> },
      { label: "Calendars", icon: <Calendar /> },
      { label: "Community", icon: <Users /> },
      { label: "Settings", icon: <Settings /> },
      // { label: "Logout", icon: <LogOut /> },
    ];

    return (
      <>
        <div className="bg-gray-800 p-4 text-white flex justify-between items-center md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <h2 className="text-2xl font-bold">Skills Academy</h2>
        </div>

        <div
          className={`fixed top-0 left-0 z-50 bg-gray-800 text-white w-64 h-screen overflow-y-auto p-5 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:block`}
        >
          <h2 className="text-2xl font-bold mb-8">Skills Academy</h2>
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={`flex items-center space-x-3 hover:text-purple-400 cursor-pointer ${
                  activePage === item.label ? "text-purple-400" : ""
                }`}
                onClick={() => setActivePage(item.label)}
              >
                {item.icon}
                <span className="text-lg">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-900 text-white">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-6 overflow-auto">
        <Navbar />
      
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
          {renderContent()}
          </div>
           <div className="space-y-6">
            <CalendarSection />
             <Assignments />
          </div>
         </div>
      </main>
    </div>
  );
}
