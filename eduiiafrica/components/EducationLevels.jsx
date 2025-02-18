import { useState } from "react";

const levels = [
  {
    level: "ELEMENTARY LEVEL",
    duration: "4",
    durationText: "In just four months, students can gain essential knowledge and skills that prepare them for higher education or specialized career paths.",
    classes: "50",
    classesText: "Emphasis is placed on critical thinking, problem-solving, and communication skills.",
    hours: "150",
    hoursText: "The structured hours are often divided into sessions, ensuring consistent progress and skill development.",
    books: "5",
    booksText: "The book provides valuable insights and engaging content to enhance understanding and knowledge.",
    features: [
      "Enhances vocabulary, grammar, and communication skills.",
      "Develops fluency in speaking and writing.",
      "Strengthens listening, reading, and comprehension abilities."
    ]
  },
  {
    level: "INTERMEDIATE LEVEL",
    duration: "6",
    durationText: "Students expand on foundational knowledge with intermediate skills for academic and professional success.",
    classes: "70",
    classesText: "Focus on advanced communication, collaboration, and practical application.",
    hours: "200",
    hoursText: "Hours structured for deeper comprehension and practical tasks.",
    books: "8",
    booksText: "Comprehensive content that bridges foundational and advanced knowledge.",
    features: [
      "Advanced grammar and vocabulary enrichment.",
      "Fluency in complex writing and presentations.",
      "Mastery of critical reading and analysis."
    ]
  },
  {
    level: "UPPER INTERMEDIATE LEVEL",
    duration: "8",
    durationText: "Advanced modules designed for near-professional fluency and comprehension.",
    classes: "90",
    classesText: "Highly interactive sessions focusing on critical and strategic thinking.",
    hours: "250",
    hoursText: "Extensive training hours for mastery in real-world scenarios.",
    books: "10",
    booksText: "In-depth books aimed at perfecting advanced knowledge.",
    features: [
      "Expert-level communication skills.",
      "Mastery in advanced writing and public speaking.",
      "Strategic comprehension for professional contexts."
    ]
  }
];

export default function EducationLevelSection() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const slide = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prev) => (prev + 1) % levels.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + levels.length) % levels.length);
    }
  };

  const current = levels[currentIndex];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-extrabold mb-10">
        EDUCATION <span className="text-blue-500">LEVEL</span>
      </h2>

      <div className="grid grid-cols-3 gap-8 w-full max-w-7xl items-center">
        {/* Left Side Info */}
        <div className="space-y-6 text-yellow-400 text-center">
          <div>
            <p className="text-5xl font-extrabold">{current.duration}</p>
            <p className="text-sm text-white">{current.durationText}</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold">{current.classes}</p>
            <p className="text-sm text-white">{current.classesText}</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold">{current.hours}</p>
            <p className="text-sm text-white">{current.hoursText}</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold">{current.books}</p>
            <p className="text-sm text-white">{current.booksText}</p>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative w-full text-center overflow-hidden">
          <button
            onClick={() => slide("prev")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
          >
            ◀
          </button>

          <div className="transition-all duration-500 ease-in-out">
            <h3 className="text-3xl font-semibold text-blue-400 mb-4 m-6 p-4">{current.level}</h3>
          </div>

          <button
            onClick={() => slide("next")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
          >
            ▶
          </button>
        </div>

        {/* Right Side Info */}
        <div className="space-y-6 text-left">
          {current.features.map((feature, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mt-1"></div>
              <p className="text-sm text-white">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
