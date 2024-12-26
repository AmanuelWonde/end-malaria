import logo from "../../public/logo2-removebg-preview 5.png";
import {
  RiFacebookCircleLine,
  RiTwitterLine,
  RiTelegramLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer
      className=" py-10 px-20 w-full bg-primary md:flex  justify-between space-y-16 md:space-y-0 text-white"
      id="contact"
    >
      <div className=" space-y-6">
        <img className="" src={logo} alt="" />
        <p className=" text-gray-200">Protecting you effectively</p>
        <div className=" flex gap-6">
          <RiFacebookCircleLine size={25} />
          <RiLinkedinLine size={25} />
          <RiTwitterLine size={25} />
          <RiTelegramLine size={25} />
        </div>
      </div>
      <ul className=" space-y-3">
        <p className=" font-bold">Home</p>
        <li>
          <a href="#product">Our Product</a>
        </li>
        <li>
          {" "}
          <a href="#footer">Contact Us</a>
        </li>
        <li>
          {" "}
          <a href="#about-us">About Us</a>
        </li>
      </ul>
      <ul className=" space-y-3">
        <p className=" font-bold">Contact us</p>
        <li>endmalariae@gmail.com</li>
        <li>www.endmalaria.com</li>
        <li>+251-9-56-98-21</li>
      </ul>
    </footer>
  );
};

export default Footer;
