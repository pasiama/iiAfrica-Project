"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between py-16 px-4 bg-black">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 px-0 lg:px-8 text-center lg:text-left mb-8 lg:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        About the Program
        </h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed font-semibold">Master Data Analytics with SkillUp Academy</p>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          Unlock the power of data with our comprehensive Data Analytics
          Training Program. Designed for beginners and professionals alike, this
          program equips learners with in-demand data analytics skills using
          real-world tools and techniques. From understanding data fundamentals
          to performing complex analyses and creating impactful visualizations,
          our hands-on curriculum prepares you for a thriving career in the
          data-driven world. Learn from industry experts, work on live projects,
          and gain the confidence to turn data insights into strategic decisions
        </p>
      </div>

      {/* Rotating Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center"
        animate={{ rotateX: 360 }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        <img
          src="/images/footer.jpg"
          alt="Descriptive Image"
          className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
}
