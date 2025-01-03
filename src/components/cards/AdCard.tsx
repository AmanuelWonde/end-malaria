const AdCard = () => {
  return (
    <div className="  bg-primary py-6 text-white w-[90%] md:w-[80%] mx-auto flex flex-col justify-center items-center rounded-3xl  h-[200px] md:h-[364px] px-6">
      <div className=" space-y-2 md:space-y-6">
        <p className=" text-xl md:text-3xl font-bold ">እራሰወን ከወባ ትንኝ ይከላከሉ</p>
        <p>ዛሬውኑ አውቶማቲክ የወባ ትንኝ መከላኬያ መርጫወን ያግኙኙ!</p>
        <a
          href="#place-order"
          className=" py-6 text-center w-full flex justify-center"
        >
          <button className=" bg-gray-100 py-2 px-4 rounded-md   text-primary font-bold">
            ይዘዙ
          </button>
        </a>
      </div>
    </div>
  );
};

export default AdCard;
