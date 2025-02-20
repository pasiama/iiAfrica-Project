"use client";

import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    { icon: "/icons/communication.svg", text: "Improved Communication Skills" },
    { icon: "/icons/career.svg", text: "Enhanced Career Opportunities" },
    { icon: "/icons/culture.svg", text: "Increased Cultural Understanding" },
    { icon: "/icons/academics.svg", text: "Boosted Academic Performance" },
    { icon: "/icons/confidence.svg", text: "Greater Personal Confidence" },
  ];

  // Parent container animation variant for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger each child's animation
      },
    },
  };

  // Each card's animation variant
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="benefits"
      className="flex justify-center py-16 bg-black"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Triggers once when 20% visible
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className=" px-4 py-6 rounded-lg text-white text-center w-48 shadow-lg hover:shadow-[0_0_20px_var(--electric-blue)] transition-shadow duration-500"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src={benefit.icon}
              alt={benefit.text}
              className="w-16 h-16 md:w-20 md:h-20"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-white text-center w-48">
              {benefit.text}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
