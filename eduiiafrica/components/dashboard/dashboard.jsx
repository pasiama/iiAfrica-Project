
import NewCourses from "@/components/dashboard/NewCourses";
import HoursActivity from "@/components/dashboard/HoursActivity";
import CourseList from "@/components/dashboard/CourseList";
import CalendarSection from "@/components/dashboard/CalendarSection";
import Assignments from "@/components/dashboard/Assignments";
const AdminDashboard = ( ) => {
      return (
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
           <AdminDashboard/>
          </div>
          <div className="space-y-6">
            <CalendarSection />
            <Assignments />
          </div>
        </div> 
      )
}
export default AdminDashboard;