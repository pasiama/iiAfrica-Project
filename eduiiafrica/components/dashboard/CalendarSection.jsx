import React from "react";
import { calendarData } from "@/components/dashboard/data/dummyData";

const Calendar = () => (
  <div className="bg-gray-800 p-4 rounded-2xl shadow-lg">
    <h2 className="text-white text-lg font-semibold mb-4">Calendar</h2>
    {calendarData.map((event) => (
      <div key={event.id} className="bg-gray-700 p-3 rounded-xl mb-2">
        <p className="text-white font-medium">{event.title}</p>
        <p className="text-sm text-gray-400">{event.time}</p>
      </div>
    ))}
  </div>
);

export default Calendar;