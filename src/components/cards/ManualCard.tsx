import Button from "../ui/Button";

const ManualCard = () => {
  return (
    <div className="h-[300px] w-full md:w-[662px] md:h-[448px] border-1 rounded border-primary p-6 space-y-6">
      <p className=" text-primary text-lg font-bold text-center  md:text-left ">
        Manual
      </p>
      <p className=" text-gray-700 text-center  md:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis at
        architecto atque possimus facilis nesciunt, praesentium ad dolores
        recusandae. Debitis. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quis at architecto atque possimus facilis nesciunt, praesentium ad
        dolores recusandae. Debitis.
      </p>

      <div className="flex justify-center md:justify-start">
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

export default ManualCard;
