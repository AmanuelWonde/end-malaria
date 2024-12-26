import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../contents/static";
import logo from "../../public/logo2-removebg-preview 5.png";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center p-4 bg-primary">
        <img src={logo} className="bg-transparent h-10" />
        <div
          onClick={toggleMenu}
          className="text-white text-2xl cursor-pointer"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 shadow-lg z-50">
          <ul className="flex flex-col items-center gap-6 p-6">
            {navLinks.map(({ to, label }) => (
              <li key={to} className="text-gray-100 text-lg">
                <a href={to} onClick={toggleMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
