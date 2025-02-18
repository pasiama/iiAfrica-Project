const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="text-xl font-bold text-[var(--gradient-bg)] mx-12">SkillUp Academy</div>
      <ul className="flex space-x-6 font-medium mx-12">
        <li className="hover:text-[var(--electric-blue)] transition-all mx-">About</li>
        <li className="hover:text-[var(--electric-blue)] transition-all ">Courses</li>
        <li className="hover:text-[var(--electric-blue)] transition-all ">Contact</li>
      </ul>
      <button className="btn-outline hover:btn-outline:hover mx-4 ">Login</button>
      <button className="btn-outline hover:btn-outline:hover mx-4">Sign Up</button>
    </nav>
  );
};
export default Navbar;
