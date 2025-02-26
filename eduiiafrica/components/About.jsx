// "use client";

// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section className="flex flex-col-reverse lg:flex-row items-center justify-between py-16 px-4 bg-black">
//       {/* Text Content */}
//       <div className="w-full lg:w-1/2 px-0 lg:px-8 text-center lg:text-left mb-8 lg:mb-0">
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//         About the Program
//         </h2>
//         <p className="text-base md:text-lg text-gray-300 leading-relaxed font-semibold">Master Data Analytics with SkillUp Academy</p>
//         <p className="text-base md:text-lg text-gray-300 leading-relaxed">
//           Unlock the power of data with our comprehensive Data Analytics
//           Training Program. Designed for beginners and professionals alike, this
//           program equips learners with in-demand data analytics skills using
//           real-world tools and techniques. From understanding data fundamentals
//           to performing complex analyses and creating impactful visualizations,
//           our hands-on curriculum prepares you for a thriving career in the
//           data-driven world. Learn from industry experts, work on live projects,
//           and gain the confidence to turn data insights into strategic decisions
//         </p>
//       </div>

//       {/* Rotating Image */}
//       <motion.div
//         className="w-full lg:w-1/2 flex justify-center"
//         animate={{ rotateX: 360 }}
//         transition={{
//           repeat: Infinity,
//           duration: 10,
//           ease: "linear",
//         }}
//       >
//         <img
//           src="/images/footer.jpg"
//           alt="Descriptive Image"
//           className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
//         />
//       </motion.div>
//     </section>
//   );
// }

// pages/index.js

import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      {/* Section 1: Hero Section */}
      <section className="relative bg-white py-16 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            About  <span className="text-green-600">us</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Our aim is to provide best-in-class recruitment tools, processes, and automation in one complete solution.
          </p>
        </div>
       
        <div className="relative w-full h-[400px] md:h-[500px]">
            <div className="absolute top-0 right-12 w-36 h-36 rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/data1.png" alt="person1" layout="fill" objectFit="cover" />
            </div>
            <div className="absolute top-32 left-0 w-40 h-40 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/data2.png" alt="person2" layout="fill" objectFit="cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/data4.png" alt="person3" layout="fill" objectFit="cover" />
            </div>
             <div className="absolute bottom-32 right-0 w-54 h-54 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/data3.png" alt="person3" layout="fill" objectFit="cover" />
            </div>
          </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="relative bg-[#c0e9f0] text-black py-20 px-6 md:px-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-white rounded-b-full"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
          <div className="flex mt-6">
            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/story.png" alt="team1" layout="fill" objectFit="cover" />
            </div>
           
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-6">Our Story</h2>
            <p className="text-lg leading-relaxed mb-6">
            Unlock the power of data with our comprehensive Data Analytics
         Training Program. Designed for beginners and professionals alike, this
          program equips learners with in-demand data analytics skills using
          real-world tools and techniques. From understanding data fundamentals
           to performing complex analyses and creating impactful visualizations,
           our hands-on curriculum prepares you for a thriving career in the
           data-driven world. Learn from industry experts, work on live projects,
          and gain the confidence to turn data insights into strategic decisions
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-3 h-3 mt-2 bg-black rounded-full"></span>
                <p className="ml-3">2012: Workable was founded in Athens, Greece.</p>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 mt-2 bg-black rounded-full"></span>
                <p className="ml-3">2013: Secured $780K in seed funding led by Openfund.</p>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 mt-2 bg-black rounded-full"></span>
                <p className="ml-3">2014: Raised $1.5M from Greylock IL for cloud-based recruitment.</p>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 mt-2 bg-black rounded-full"></span>
                <p className="ml-3">2015: Raised $27M in Series B funding.</p>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 mt-2 bg-black rounded-full"></span>
                <p className="ml-3">2018: Raised $50M to automate recruiting for SMBs.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

