import prodcutImage from "../../../public/product (3).png";
import basketImage from "../../../public/basket.svg";
const ProductCard = () => {
  return (
    <div className="bg-primary w-[90%] md:w-[355px]  rounded-lg">
      <img className=" w-[355px] h-[363px] rounded-t-lg" src={prodcutImage} />
      <div className=" bg-primary has-[186px] py-2 flex flex-col gap-2 justify-center items-center rounded-lg">
        <img className=" w-8 h-8" src={basketImage} />
        <p className=" text-white text-lg text-center font-extrabold">
          Automate the spraying process
        </p>
        <p className=" text-gray-200 text-sm">
          No need for manual labor and extra expenses
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
