import { motion } from "framer-motion";

const messages = [
  { sender: "John Doe", content: "Hey, did you finish the assignment?", time: "2h ago" },
  { sender: "Sarah Lee", content: "Check out the new course module.", time: "1d ago" },
  { sender: "Tayo", content: "Group meeting rescheduled to Friday.", time: "3d ago" },
];

export default function Messages() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-semibold mb-8">Messages</h2>
      <div className="space-y-6">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-4 bg-gray-800 rounded-2xl shadow-lg flex justify-between items-center"
          >
            <div>
              <h4 className="font-semibold">{msg.sender}</h4>
              <p className="text-gray-400">{msg.content}</p>
            </div>
            <span className="text-sm text-gray-500">{msg.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}