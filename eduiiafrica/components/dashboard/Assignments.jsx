import React from "react";
import { assignmentsData } from "@/components/dashboard/data/dummyData";

const Assignments = () => (
  <div className="bg-gray-800 p-4 rounded-2xl shadow-lg">
    <h2 className="text-white text-lg font-semibold mb-4">Assignments</h2>
    {assignmentsData.map((assignment) => (
      <div key={assignment.id} className="bg-gray-700 p-3 rounded-xl mb-2 flex justify-between items-center">
        <div>
          <p className="text-white font-medium">{assignment.title}</p>
          <p className="text-sm text-gray-400">{assignment.dueDate}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${assignment.status === 'Completed' ? 'bg-green-500' : assignment.status === 'In Progress' ? 'bg-yellow-500' : 'bg-blue-500'}`}>
          {assignment.status}
        </span>
      </div>
    ))}
  </div>
);

export default Assignments