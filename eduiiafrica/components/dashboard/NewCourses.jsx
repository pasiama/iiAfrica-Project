import { newCourses } from "@/components/dashboard/data/dummyData";

const NewCourses = () => {
  return (
   
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {newCourses.map((course) => (
        <div key={course.id} className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
          <p>{course.lessons}</p>
        
        </div>
      ))}
    </div>
  );
};

export default NewCourses;