const Navbar = () => {
      return (
        <div className="flex justify-between items-center bg-gray-900 text-white p-4 shadow-lg">
          <input
            type="text"
            placeholder="Search Anything Here..."
            className="w-1/2 p-2 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <div className="flex items-center space-x-4">
            <span className="font-semibold">Mohamed Ahmed</span>
            <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full w-10 h-10" />
          </div>
        </div>
      );
    };
    
    export default Navbar;