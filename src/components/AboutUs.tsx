import productImage from "../../public/product.png";
import Button from "./ui/Button";
const AboutUs = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row justify-center items-center gap-8 bg-bgPrimary p-6"
      id="about-us"
    >
      <div className="w-full max-w-xl space-y-8 text-center  md:text-left">
        <h1 className="text-3xl text-primary font-extrabold">Who We Are</h1>
        <p className="text-gray-700">
          We are a team based in Addis Ababa, Ethiopia focusing on manufacturing
          and distributing an automated mosquito repellent dispenser to help
          prevail the spread of malaria by combating the spread of Mosquitoes in
          an automated and efficient manner.
        </p>
        <div className="flex justify-center md:justify-start">
          <a href="#place-order">
            <Button>Contact Us</Button>
          </a>
        </div>
      </div>
      <img
        className="w-full max-w-lg h-auto"
        src={productImage}
        alt="Product"
      />
    </div>
  );
};

export default AboutUs;
