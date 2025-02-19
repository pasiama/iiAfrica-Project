import { Home, BookOpen, Users, Bell, Calendar, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
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
    <div className="w-64 bg-gray-800 h-screen text-white p-5">
      <h2 className="text-2xl font-bold mb-8">Edutive</h2>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.label} className="flex items-center space-x-3 hover:text-purple-400 cursor-pointer">
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;