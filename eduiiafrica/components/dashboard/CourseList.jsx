import React from "react";
import { coursesData } from "@/components/dashboard/data/dummyData";

const CourseList = () => (
  <div className="bg-gray-800 p-4 rounded-2xl shadow-lg">
    <h2 className="text-white text-lg font-semibold mb-4">Recent Student Sign-Ups</h2>
    {coursesData.map((course) => (
      <div key={course.id} className="bg-gray-700 p-3 rounded-xl mb-3 flex justify-between items-center">
        <div>
          <p className="text-white font-medium">{course.name}</p>
          <p className="text-sm text-gray-400">{course.instructor}</p>
        </div>
        {/* <p className="text-purple-400">{course.progress}%</p> */}
      </div>
    ))}
  </div>
);

export default CourseList;