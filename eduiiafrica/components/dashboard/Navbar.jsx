const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-900 text-white p-4 shadow-lg space-y-4 sm:space-y-0 sm:space-x-4">
      <input
        type="text"
        placeholder="Search Anything Here..."
        className="w-full sm:w-1/2 p-2 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <div className="flex items-center space-x-4">
        <span className="font-semibold text-center sm:text-left">Mohamed Ahmed</span>
        <img
          src="/images/headshoot3.png"
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
      </div>
    </div>
  );
};

export default Navbar;