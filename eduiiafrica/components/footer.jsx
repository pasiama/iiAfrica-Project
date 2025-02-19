const FooterSection = () => {
      return (
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">About Us</h3>
              <p className="text-gray-400">
                We are dedicated to providing the best resources and learning materials for frontend developers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Home</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Courses</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Subscribe to our Newsletter</h3>
              <form className="flex flex-col sm:flex-row items-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full sm:w-auto flex-grow px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="mt-4 sm:mt-0 sm:ml-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
        </footer>
      );
    };
    export default FooterSection;