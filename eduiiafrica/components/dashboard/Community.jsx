import { motion } from "framer-motion";

const CommunityPage = () => {
  const communityMembers = [
    { id: 1, name: "Jane Doe", role: "Student", image: "/images/headshoot3.png" },
    { id: 2, name: "John Smith", role: "Instructor", image: "/images/headshoot3.png" },
    { id: 3, name: "Sara Lee", role: "Moderator", image: "/images/headshoot3.png" },
  ];

  return (
    <motion.div
      className="p-6 bg-gray-900 text-white min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">Community</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {communityMembers.map((member) => (
          <motion.div
            key={member.id}
            className="bg-gray-800 p-4 rounded-2xl shadow-lg flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-purple-400">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CommunityPage;
