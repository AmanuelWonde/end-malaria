import heroImage from "../../public/Hero-section.jpg";

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
      <div className="w-full h-full flex flex-col justify-center md:items-end md:pr-20 gap-3 p-6 box-border bg-black bg-opacity-40">
        <p className="md:text-right text-xl md:text-3xl text-gray-200 font-bold md:w-[40%]">
          የወባ ትንኞችን ስርጭት ለመግታት እና እራስዎን ከወባ ለመጠበቅ የእኛን{" "}
          <span className="text-emerald-900">አውቶማቲክ</span> የወባ ትንኝ  መከላኬያ መርጫ
          ይጠቀሙ
        </p>
        <a
          href="#product"
          className=" w-full flex justify-center md:block md:w-40"
        >
          <button className="rounded-3xl bg-primary text-white w-40 p-2 px-6">
            {" "}
            ይበልጥ ለማወቅ
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
