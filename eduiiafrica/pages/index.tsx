"use client";
import Navbar from "@/components/Navbar";
import BenefitsSection from "@/components/BenefitsSection";
import About from "@/components/About";
import EducationLevels from "@/components/EducationLevels";
import OurTeam from "@/components/OurTeam";
import ApplySection from "@/components/ApplySection";
import RecommendationSection from "@/components/Recommendation";
import ClientRecommendation from "@/components/ClientRecommendation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen text-white scroll-smooth">
      {/* Hero Section */}
      <Navbar />

      <section
        id="hero"
        className="flex flex-col-reverse md:flex-row items-center min-h-screen relative"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />

        {/* Semi-Transparent Content Card */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-black/50 w-full md:w-1/2 h-full md:h-screen flex flex-col justify-center items-center p-6 md:p-10 backdrop-blur-md"
      >
        <div className="space-y-6 max-w-lg text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            GROW <span className="text-yellow-400">UP</span> YOUR{" "}
            <span className="text-[var(--electric-blue)]">SKILLS</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            Unlock your potential and embrace the joy of learning at our center,
            where every step takes you closer to success.
          </p>
          <a href="#apply">
            <button className="bg-gradient-to-r from-blue-400 to-blue-600  px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition-all">
              Enroll now
            </button>
          </a>
        </div>
      </motion.div>
      </section>

      {/* Other Sections with IDs */}
      <section id="benefits">
        <BenefitsSection />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="education">
        <EducationLevels />
      </section>

      <section id="recommendation">
        <RecommendationSection />
      </section>

      {/* <section id="team">
        <OurTeam />
      </section> */}

      <section id="apply">
        <ApplySection />
      </section>

      <section id="client-recommendation">
        <ClientRecommendation />
      </section>

      <Footer />
    </div>
  );
}
