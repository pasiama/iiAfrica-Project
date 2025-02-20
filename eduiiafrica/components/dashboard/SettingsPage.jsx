import { motion } from "framer-motion";

const SettingsPage = () => {
  return (
    <motion.div
      className="p-6 bg-gray-900 text-white min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">Settings</h2>
      <form className="space-y-6 bg-gray-800 p-6 rounded-2xl shadow-lg">
        <div>
          <label className="block text-lg font-medium mb-2">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-lg font-semibold transition-colors duration-300"
        >
          Save Changes
        </button>
      </form>
    </motion.div>
  );
};

export default SettingsPage;