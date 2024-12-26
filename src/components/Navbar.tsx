import { navLinks } from "../contents/static";
import logo from "../../public/logo2-removebg-preview 5.png";
import MobileNavbar from "./MobileNavbar";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-primary py-2 px-6">
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <div className="flex justify-between items-center">
          <img src={logo} className="bg-transparent h-10" />
          <ul className="flex gap-8">
            {navLinks.map(({ to, label }) => (
              <li key={to} className="text-gray-100">
                <a href={to}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
