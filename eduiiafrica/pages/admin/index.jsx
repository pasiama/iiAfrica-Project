// index.tsx
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import NewCourses from "@/components/dashboard/NewCourses";
import HoursActivity from "@/components/dashboard/HoursActivity";
import CourseList from "@/components/dashboard/CourseList";
import CalendarSection from "@/components/dashboard/CalendarSection";
import Assignments from "@/components/dashboard/Assignments";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-6 overflow-auto">
        <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <NewCourses />
            <HoursActivity />
            <CourseList />
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
