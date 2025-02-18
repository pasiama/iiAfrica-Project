// components/TwoColumnSection.js

export default function About() {
      return (
        <section className="flex items-center justify-between py-16 px-4  bg-black">
          <div className="w-full lg:w-1/2">
            <img
              src="/images/about.jpg"
              alt="Descriptive Image"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 px-8">
            <h2 className="text-3xl font-semibold  mb-4">
             ABOUT US
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel urna a felis tincidunt
              ullamcorper sit amet ut odio. Curabitur euismod odio vel interdum posuere. Nulla facilisi.
            </p>
          </div>
        </section>
      );
    }
    