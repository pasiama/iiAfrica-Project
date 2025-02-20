"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between py-16 px-4 bg-black">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 px-0 lg:px-8 text-center lg:text-left mb-8 lg:mb-0">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          ABOUT US
        </h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel urna a felis tincidunt
          ullamcorper sit amet ut odio. Curabitur euismod odio vel interdum posuere. Nulla facilisi.
        </p>
      </div>

      {/* Rotating Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center"
        animate={{ rotateX: 360 }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "circular",
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
