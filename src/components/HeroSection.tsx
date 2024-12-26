import heroImage from "../../public/Hero-section.jpg";
import Button from "./ui/Button";

const HeroSection = () => {
  return (
    <div
      className="w-full h-[300px] md:h-[600px]"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full flex flex-col justify-center md:items-end md:pr-20 gap-3 p-6 box-border">
        <p className="md:text-right text-3xl text-gray-200 font-bold md:w-[40%]">
          Protect Yourself from <span className="text-primary">Malaria</span>,
          Use our <span className="text-primary">Automated</span> dispenser to
          put an end to <span className="text-primary">Mosquito</span> spread
        </p>
        <Button className="rounded-3xl w-40 px-6"> Learn More</Button>
      </div>
    </div>
  );
};

export default HeroSection;
