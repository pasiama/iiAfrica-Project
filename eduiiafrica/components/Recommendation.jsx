const RecommendationSection = () => {
      const recommendations = [
        {
          id: 1,
          title: "Learn Next.js",
          description: "Master the power of server-side rendering and static site generation with Next.js.",
          link: "https://nextjs.org/"
        },
        {
          id: 2,
          title: "Explore Tailwind CSS",
          description: "Build modern, responsive UIs rapidly with Tailwind CSS utility-first framework.",
          link: "https://tailwindcss.com/"
        },
        {
          id: 3,
          title: "JavaScript Essentials",
          description: "Understand the fundamentals of JavaScript to enhance your web development skills.",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        }
      ];
    
      return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Recommended for You</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Here are some resources we think you'll find helpful.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendations.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Explore Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };
    export default RecommendationSection;