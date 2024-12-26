import Button from "../ui/Button";

const AdCard = () => {
  return (
    <div className="  bg-primary text-white w-[90%] md:w-[80%] mx-auto flex flex-col justify-center items-center rounded-3xl  h-[200px] md:h-[364px] px-6">
      <div className=" space-y-6">
        <p className=" text-xl md:text-3xl font-bold">
          Protect Yourself from Malaria
        </p>
        <p>Get your automated mosquito repellent dispenser TODAY !</p>
        <Button className=" bg-gray-100 text-gray-700">Place Order</Button>
      </div>
    </div>
  );
};

export default AdCard;
