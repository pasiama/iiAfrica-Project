// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="text-xl font-bold text-[var(--gradient-bg)] mx-12">SkillUp Academy</div>
//       <ul className="flex space-x-6 font-medium mx-12">
//         <li className="hover:text-[var(--electric-blue)] transition-all mx-">About</li>
//         <li className="hover:text-[var(--electric-blue)] transition-all ">Courses</li>
//         <li className="hover:text-[var(--electric-blue)] transition-all ">Contact</li>
//       </ul>
//       <button className="btn-outline hover:btn-outline:hover mx-4 ">Login</button>
//       <button className="btn-outline hover:btn-outline:hover mx-4">Sign Up</button>
//     </nav>
//   );
// };
// export default Navbar;


import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-[var(--gradient-bg)]">
          SkillUp Academy
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <Link href="#about" className="hover:text-[var(--electric-blue)] transition-all">
              About
            </Link>
          </li>
          <li>
            <Link href="#courses" className="hover:text-[var(--electric-blue)] transition-all">
              Courses
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-[var(--electric-blue)] transition-all">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X className="w-8 h-8 cursor-pointer" onClick={toggleMenu} />
          ) : (
            <Menu className="w-8 h-8 cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          <li>
            <Link href="#about" onClick={toggleMenu} className="block hover:text-[var(--electric-blue)]">
              About
            </Link>
          </li>
          <li>
            <Link href="#courses" onClick={toggleMenu} className="block hover:text-[var(--electric-blue)]">
              Courses
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={toggleMenu} className="block hover:text-[var(--electric-blue)]">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
