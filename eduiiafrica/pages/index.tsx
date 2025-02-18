"use client";
import Navbar from "@/components/Navbar";
import BenefitsSection from "@/components/BenefitsSection";
import About from "@/components/About";
import EducationLevels from "@/components/EducationLevels"
import OurTeam from "@/components/OurTeam"



export default function LandingPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Overlay for Readability */}
      <div className="relative z-10">
        <section className="flex items-center min-h-screen">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center brightness-75"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
          >
                      <Navbar />

          </div>

          {/* Full Height Semi-Transparent Card */}
          <div className="bg-black/50 h-screen w-1/2 flex flex-col justify-center items-center p-10 backdrop-blur-md">
            <div className="space-y-6 max-w-lg text-center">
              <h1 className="text-5xl font-bold leading-tight ">
                GROW <span className="text-yellow-400">UP</span> YOUR{" "}
                <span className="text-[var(--electric-blue)]">SKILLS</span>
              </h1>
              <p className="text-gray-300 ">
                Unlock your potential and embrace the joy of learning at our
                center, where every step takes you closer to success.
              </p>
              <button className="btn-gradient px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition-all">
                Enroll now
              </button>
            </div>
          </div>
        </section>
      </div>
      <BenefitsSection />

      <About />
      <EducationLevels/>
      <OurTeam/>
    </div>
  );
}
