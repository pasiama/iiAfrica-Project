// "use client";

// import { motion } from "framer-motion";

// const RecommendationSection = () => {
//   const recommendations = [
//     {
//       id: 1,
//       title: "Learn Next.js",
//       description:
//         "Master the power of server-side rendering and static site generation with Next.js.",
//       link: "https://nextjs.org/",
//       gridClasses: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-3",
//     },
//     {
//       id: 2,
//       title: "Explore Tailwind CSS",
//       description:
//         "Build modern, responsive UIs rapidly with Tailwind CSS utility-first framework.",
//       link: "https://tailwindcss.com/",
//       gridClasses: "lg:row-start-2 lg:row-end-4 lg:col-start-2 lg:col-end-4",
//     },
//     {
//       id: 3,
//       title: "JavaScript Essentials",
//       description:
//         "Understand the fundamentals of JavaScript to enhance your web development skills.",
//       link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//       gridClasses: "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4",
//     },
//     {
//       id: 4,
//       title: "Advanced React",
//       description:
//         "Dive deeper into React's ecosystem and learn advanced concepts for scalable applications.",
//       link: "https://reactjs.org/",
//       gridClasses: "lg:row-start-1 lg:row-end-3 lg:col-start-4 lg:col-end-5",
//     },
//     {
//       id: 5,
//       title: "Node.js Mastery",
//       description:
//         "Gain expertise in backend development with Node.js and build scalable network applications.",
//       link: "https://nodejs.org/en/",
//       gridClasses: "lg:row-start-3 lg:row-end-5 lg:col-start-1 lg:col-end-2",
//     },
//     {
//       id: 6,
//       title: "TypeScript Guide",
//       description:
//         "Enhance your JavaScript projects with TypeScript for safer and more robust code.",
//       link: "https://www.typescriptlang.org/",
//       gridClasses: "lg:row-start-3 lg:row-end-4 lg:col-start-4 lg:col-end-5",
//     },
//     {
//       id: 7,
//       title: "API Design Principles",
//       description:
//         "Learn how to design intuitive, robust, and scalable APIs for web applications.",
//       link: "https://swagger.io/docs/specification/about/",
//       gridClasses: "lg:row-start-4 lg:row-end-5 lg:col-start-3 lg:col-end-5",
//     },
//     {
//       id: 8,
//       title: "UI/UX Design Basics",
//       description:
//         "Understand key UI/UX design principles to create delightful and user-friendly experiences.",
//       link: "https://uxdesign.cc/",
//       gridClasses: "lg:row-start-4 lg:row-end-5 lg:col-start-2 lg:col-end-3",
//     },
//     {
//       id: 9,
//       title: "Git & GitHub Essentials",
//       description:
//         "Master Git and GitHub workflows to collaborate effectively in software projects.",
//       link: "https://git-scm.com/",
//       gridClasses: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
//     },
//   ];

//   const rowVariants = {
//     hidden: { x: "-100vw" },
//     visible: (i) => ({
//       x: 0,
//       transition: {
//         delay: i * 0.3,
//         duration: 0.8,
//         type: "spring",
//         stiffness: 50,
//       },
//     }),
//   };

//   return (
//     <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.h2
//           className="text-3xl font-bold text-gray-900 dark:text-white"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Recommended for You
//         </motion.h2>
//         <motion.p
//           className="mt-4 text-lg text-gray-600 dark:text-gray-400"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           Here are some resources we think you'll find helpful.
//         </motion.p>

//         <div
//           className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)] lg:grid-rows-[repeat(4,1fr)] gap-6"
//         >
//           {recommendations.map((item, i) => (
//             <motion.div
//               key={item.id}
//               className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow  duration-300 ${item.gridClasses}`}
//               variants={rowVariants}
//               initial="hidden"
//               animate="visible"
//               custom={i}
//             >
//               <h3 className="text-xl text-center font-semibold text-gray-800 dark:text-white mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-center dark:text-gray-400 mb-4">
//                 {item.description}
//               </p>
//               <a
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 text-center dark:text-blue-400 hover:underline"
//               >
//                 Explore Now
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecommendationSection;



import React from 'react';
import Image from 'next/image';

export default function RecommendationSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-700 text-black py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get the kind of advice on our online courses from our team of experts
          </h1>
          <p className="text-lg text-black mb-6">
            Have 1-on-1 conversations about growth, marketing, and everything in between with the world\'s top 3% of startup and marketing mentors.
          </p>
         
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: 'Bahram Ehsas', title: 'Head of Demand Generation at Holded' , img: "/images/headshoot3.png",},
            { name: 'Marcos Bravo C.', title: 'Marketing Strategist - LiveChat Brand Ambassador', img: "/images/headshoot3.png", },
            { name: 'Sergi Garcia', title: 'Chief Marketing Officer at Red Points', img: "/images/headshoot3.png", },
            { name: 'Agata Krzysztofik', title: 'Head of Marketing at Piktochart', img: "/images/headshoot3.png", },
            { name: 'Michael Taylor', title: 'Co-Founder at Ladder.io, $50m+ spent on paid' , img: "/images/headshoot3.png",},
            { name: 'Nikki Elbaz', title: 'Head of Email at Copyhackers Agency', img: "/images/headshoot3.png", },
            { name: 'Harri Thomas', title: 'Former Co-Founder at Respondent.io, ' , img: "/images/headshoot3.png",},
            { name: 'Hannah Parvaz', title: 'Head of Growth at Curio, App Marketer of the Year', img: "/images/headshoot3.png", },
            { name: 'Positive John', title: 'Leading Growth Expert involved in 300+ Million users', img: "/images/headshoot3.png", }
          ].map((mentor, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 shadow-lg text-center"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-700 mb-4">
                <Image
                  src={mentor.img}
                  alt={mentor.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{mentor.name}</h3>
              <p className="text-sm text-gray-400">{mentor.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 text-gray-300 text-sm text-center">
        <p className="mb-2 text-lg text-gray-300">WITH 220+ GROWTH MENTORS JUST A CLICK AWAY, YOU CAN:</p>
        <ul className="list-disc list-inside text-lg text-gray-300 mb-6">
          <li>Get your ideas validated so you\'re blazing with confidence</li>
          <li>Get personalized advice on your growth strategy</li>
          <li>Get clarity on things you\'re struggling with</li>
          <li>Get a virtual shoulder to sob on + practical advice on how to move forward</li>
        </ul>
      </div>
    </section>
  );
}
