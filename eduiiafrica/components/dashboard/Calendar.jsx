import { motion } from "framer-motion";

const calendarEvents = [
  { id: 1, date: "2025-02-20", event: "JavaScript Class" },
  { id: 2, date: "2025-02-22", event: "React Workshop" },
  { id: 3, date: "2025-02-25", event: "Frontend Assessment" },
];

export default function CalendarPage() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Calendar</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {calendarEvents.map((event) => (
          <div
            key={event.id}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold">{event.event}</h3>
            <p className="text-gray-400">Date: {event.date}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}