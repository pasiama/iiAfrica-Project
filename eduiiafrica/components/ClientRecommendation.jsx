const ClientRecommendation = () => {
      const recommendations = [
        {
          id: 1,
          name: "Aisha Bello, Data Analyst at FinTech Solutions",
          recommendation: "SkillUp Academy transformed my career. The practical projects helped me gain confidence, and the career support team was instrumental in landing my data analyst role.",
         
        },
        {
          id: 2,
          name: "John Kamau, Junior Data Scientist at Global Insights",
          recommendation: "What stood out about SkillUp Academy was the focus on practical application. The real-world projects and mentorship made learning engaging and impactful.",
         
        },
        {
          id: 3,
          name: "Linda Mensah, Business Intelligence Analyst at RetailMart",
          recommendation: "The flexibility of the course allowed me to balance work and study perfectly. The instructors are supportive, and the content is top-notch!",
         
        }
      ];
    
      return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Recommendations from our esteemed Clients</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
             Hear from our famous clients around the world
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendations.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{item.recommendation}</p>
               
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };
    export default ClientRecommendation;