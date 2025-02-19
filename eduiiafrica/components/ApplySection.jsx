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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white"   style={{ backgroundImage: "url('/images/footer.jpg')" }}>
       {/* <div>
          <img src="/images/footer.jpg" alt="Abstract Sphere" className="object-cover w-full h-full" />
        </div> */}
      <div className="flex flex-col md:flex-row items-center gap-10 p-6 bg-gray-800 rounded-2xl shadow-2xl">
       
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">
            APPLY ON FIRST <span className="text-blue-400">FREE CLASS</span>
          </h2>
          <p className="mb-6 text-gray-300">
            Data Analytics is about to sweep the world. Join in now to be a part of this incredible experience
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            Apply
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-96 text-gray-800 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
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
