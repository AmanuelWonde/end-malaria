interface InputProps {
  lable: string;
  placeHolder: string;
  required?: boolean;
}
const Input = ({ lable, placeHolder, required }: InputProps) => {
  return (
    <div className=" flex flex-col w-full space-y-2">
      <label htmlFor="">
        {lable} {required && <span className=" text-red-600 font-bold">*</span>}
      </label>
      <input
        className={`p-2 border-2 border-gray-200 w-full rounded`}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;
