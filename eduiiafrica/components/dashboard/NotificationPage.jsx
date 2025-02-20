import { motion } from "framer-motion";

const notifications = [
  { id: 1, title: "Assignment Due", description: "Your React assignment is due tomorrow." },
  { id: 2, title: "New Message", description: "You have a new message from Sarah." },
  { id: 3, title: "Class Cancelled", description: "The JavaScript class has been cancelled for today." },
];

export default function NotificationPage() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {notifications.map((note) => (
          <div
            key={note.id}
            className="bg-gray-800 p-4 rounded-xl shadow-lg hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold">{note.title}</h3>
            <p className="text-gray-400">{note.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
