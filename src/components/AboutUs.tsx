import productImage from "../../public/product.png";
import Button from "./ui/Button";
const AboutUs = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row justify-center items-center gap-8 bg-bgPrimary p-6"
      id="about-us"
    >
      <div className="w-full max-w-xl space-y-8 text-center  md:text-left">
        <h1 className="text-3xl text-primary font-extrabold">ስለ እኛ</h1>
        <p className="text-gray-700">
          የወባ ስርጭትን በራስ ሰር እና ቀልጣፋ በመታገል የወባ ስርጭትን ለመግታት የሚረዳ አውቶማቲክ የወባ ትንኝ
          መከላከያ ማሽን በማምረት እና በማከፋፈል ላይ ያተኮረ አዲስ አበባ ላይ የተመሰረተ ቡድን ነን።
        </p>
        <div className="flex justify-center md:justify-start">
          <a href="#place-order">
            <Button>አግኙን</Button>
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
