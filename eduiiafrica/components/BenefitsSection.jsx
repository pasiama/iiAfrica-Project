"use client";

export default function BenefitsSection() {
  const benefits = [
    { icon: "/icons/communication.svg", text: "Improved Communication Skills" },
    { icon: "/icons/career.svg", text: "Enhanced Career Opportunities" },
    { icon: "/icons/culture.svg", text: "Increased Cultural Understanding" },
    { icon: "/icons/academics.svg", text: "Boosted Academic Performance" },
    { icon: "/icons/confidence.svg", text: "Greater Personal Confidence" },
  ];

  return (
    <section className="flex justify-center py-16 bg-black">
      <div className="grid grid-cols-5 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <img src={benefit.icon} alt={benefit.text} className="w-20 h-20" />
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-white text-center w-48">
              {benefit.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
