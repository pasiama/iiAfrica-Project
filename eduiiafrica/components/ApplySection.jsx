import { useState } from "react";
import { useRouter } from "next/router";

export default function ApplySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    router.push("/admin");
  };

  return (
    <section
    className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white bg-cover bg-center"
    style={{ backgroundImage: "url('/images/footer.jpg')" }}
  >
    <div className="flex  md:flex-row items-center gap-10 p-6 md:p-10 bg-gray-800 rounded-2xl shadow-2xl max-w-6xl w-full">
      {/* Image Section */}
      {/* <div className="w-full md:w-1/2">
        <img
          src="/images/footer.jpg"
          alt="Data Analytics Class"
          className="rounded-2xl w-full h-auto object-cover shadow-lg"
        />
      </div> */}
  
      {/* Text Section */}
      <div className="text-center md:text-left w-full md:w-1/2">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
          APPLY ON FIRST <span className="text-blue-400">FREE CLASS</span>
        </h2>
        <p className="mb-6 text-gray-300 text-sm sm:text-base">
          Data Analytics is about to sweep the world. Join in now to be a part of this incredible experience.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full text-white font-semibold shadow-lg hover:opacity-90 transition"
        >
          Apply
        </button>
      </div>
    </div>
  
    {/* Modal Section */}
    {isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 w-full max-w-md text-gray-800 relative">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
          >
            ✕
          </button>
          <h3 className="text-2xl font-bold mb-4 text-center">Apply for Free Class</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="course"
              placeholder="Course of Interest"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg text-white font-bold hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )}
  </section>
  
  );
}
