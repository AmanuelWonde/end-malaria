import manualImage from "../../../public/end-malaria-manual.png";
const ManualCard = () => {
  return (
    <div className=" w-full md:w-[662px] md:h-[448px] border-1 rounded border-primary p-6 space-y-6">
      <p className=" text-primary text-2xl font-bold text-center  md:text-left ">
        የአጠቃቀም መረጃ
      </p>
      <div className=" md:flex gap-10 space-y-4 ">
        <img
          src={manualImage}
          height={200}
          width={100}
          alt="Manual"
          className=" w-80 h-96 rounded"
        />
        <ol className=" space-y-2">
          <li className=" font-bold text-lg">
            {" "}
            <span className=" text-xl text-primary p-3">2</span> ለማብራት እና ለማጥፋት
          </li>
          <li className=" font-bold text-lg">
            {" "}
            <span className=" text-xl text-primary  p-3">1</span>የአሰራር ሁኔታ
            ለመከታተል
          </li>
          <li className=" font-bold text-lg">
            {" "}
            <span className=" text-xl text-primary  p-3">3</span>የማሳያውን ብርሀን
            ለመጨመር እና ለመቀነስ
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ManualCard;
