import { motion } from "framer-motion";

export default function MyCourses() {
  const courses = [
    { title: "React for Beginners", progress: 80 },
    { title: "Next.js Advanced", progress: 45 },
    { title: "TailwindCSS", progress: 60 },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 space-y-8">
      <motion.h1
        className="text-3xl font-bold"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        My Courses
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {courses.map((course) => (
          <motion.div
            key={course.title}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:bg-purple-700 transition-colors duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-xl font-semibold mb-4">{course.title}</h2>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-purple-500 h-2.5 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="mt-2 text-sm">Progress: {course.progress}%</p>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
