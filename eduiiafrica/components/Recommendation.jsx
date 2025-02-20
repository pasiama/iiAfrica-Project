"use client";

import { motion } from "framer-motion";

const RecommendationSection = () => {
  const recommendations = [
    {
      id: 1,
      title: "Learn Next.js",
      description:
        "Master the power of server-side rendering and static site generation with Next.js.",
      link: "https://nextjs.org/",
      gridClasses: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-3",
    },
    {
      id: 2,
      title: "Explore Tailwind CSS",
      description:
        "Build modern, responsive UIs rapidly with Tailwind CSS utility-first framework.",
      link: "https://tailwindcss.com/",
      gridClasses: "lg:row-start-2 lg:row-end-4 lg:col-start-2 lg:col-end-4",
    },
    {
      id: 3,
      title: "JavaScript Essentials",
      description:
        "Understand the fundamentals of JavaScript to enhance your web development skills.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      gridClasses: "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4",
    },
    {
      id: 4,
      title: "Advanced React",
      description:
        "Dive deeper into React's ecosystem and learn advanced concepts for scalable applications.",
      link: "https://reactjs.org/",
      gridClasses: "lg:row-start-1 lg:row-end-3 lg:col-start-4 lg:col-end-5",
    },
    {
      id: 5,
      title: "Node.js Mastery",
      description:
        "Gain expertise in backend development with Node.js and build scalable network applications.",
      link: "https://nodejs.org/en/",
      gridClasses: "lg:row-start-3 lg:row-end-5 lg:col-start-1 lg:col-end-2",
    },
    {
      id: 6,
      title: "TypeScript Guide",
      description:
        "Enhance your JavaScript projects with TypeScript for safer and more robust code.",
      link: "https://www.typescriptlang.org/",
      gridClasses: "lg:row-start-3 lg:row-end-4 lg:col-start-4 lg:col-end-5",
    },
    {
      id: 7,
      title: "API Design Principles",
      description:
        "Learn how to design intuitive, robust, and scalable APIs for web applications.",
      link: "https://swagger.io/docs/specification/about/",
      gridClasses: "lg:row-start-4 lg:row-end-5 lg:col-start-3 lg:col-end-5",
    },
    {
      id: 8,
      title: "UI/UX Design Basics",
      description:
        "Understand key UI/UX design principles to create delightful and user-friendly experiences.",
      link: "https://uxdesign.cc/",
      gridClasses: "lg:row-start-4 lg:row-end-5 lg:col-start-2 lg:col-end-3",
    },
    {
      id: 9,
      title: "Git & GitHub Essentials",
      description:
        "Master Git and GitHub workflows to collaborate effectively in software projects.",
      link: "https://git-scm.com/",
      gridClasses: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    },
  ];

  const rowVariants = {
    hidden: { x: "-100vw" },
    visible: (i) => ({
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        type: "spring",
        stiffness: 50,
      },
    }),
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Recommended for You
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Here are some resources we think you'll find helpful.
        </motion.p>

        <div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)] lg:grid-rows-[repeat(4,1fr)] gap-6"
        >
          {recommendations.map((item, i) => (
            <motion.div
              key={item.id}
              className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${item.gridClasses}`}
              variants={rowVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {item.description}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Explore Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;
