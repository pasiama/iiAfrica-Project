import { motion } from "framer-motion";

const classes = [
  { name: "React Basics", schedule: "Mon & Wed - 10AM" },
  { name: "Advanced CSS", schedule: "Tue & Thu - 2PM" },
  { name: "Backend Integration", schedule: "Fri - 1PM" },
];

export default function MyClasses() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-semibold mb-8">My Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {classes.map((cls, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-gray-800 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-medium mb-2">{cls.name}</h3>
            <p className="text-gray-400">{cls.schedule}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}