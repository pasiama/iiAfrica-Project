import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { hoursActivityData } from "@/components/dashboard/data/dummyData";

const HoursActivity = () => (
  <div className="bg-gray-800 p-4 rounded-2xl shadow-lg">
    <h2 className="text-white text-lg font-semibold mb-4">Enrollment Trends</h2>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={hoursActivityData}>
        <XAxis dataKey="day" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Line type="monotone" dataKey="hours" stroke="#a855f7" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default HoursActivity;