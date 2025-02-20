import { useState } from "react";
import { Home, BookOpen, Users, Bell, Calendar, Settings, LogOut, Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Dashboard", icon: <Home />, href: "#" },
    { label: "My Courses", icon: <BookOpen />, href: "#" },
    { label: "My Classes", icon: <Users />, href: "#" },
    { label: "Messages", icon: <Bell />, href: "#" },
    { label: "Notifications", icon: <Bell />, href: "#" },
    { label: "Calendars", icon: <Calendar />, href: "#" },
    { label: "Community", icon: <Users />, href: "#" },
    { label: "Settings", icon: <Settings />, href: "#" },
    { label: "Logout", icon: <LogOut />, href: "#" },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <div className="bg-gray-800 p-4 text-white flex justify-between items-center md:hidden">
        <button
          className="focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <h2 className="text-2xl font-bold">Skills Academy</h2>

      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 bg-gray-800 text-white w-64 h-full p-5 transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:block`}
      >
        <div className="flex justify-between items-center mb-8 md:hidden">
          <h2 className="text-2xl font-bold">Skills Academy</h2>
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-8 hidden md:block">Skills Academy</h2>
        <ul className="space-y-6">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center space-x-3 hover:text-purple-400 cursor-pointer"
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

export default Sidebar;