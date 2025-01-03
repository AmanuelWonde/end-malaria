interface InputProps {
  lable: string;
  placeHolder: string;
  required?: boolean;
  value?: string | number;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
}
const Input = ({
  lable,
  placeHolder,
  required,
  value,
  disabled,
  onChange,
  type,
  name,
}: InputProps) => {
  return (
    <div className=" flex flex-col w-full space-y-2">
      <label htmlFor="">
        {lable} {required && <span className=" text-red-600 font-bold">*</span>}
      </label>
      <input
        className={`p-2 border-2 border-gray-200 w-full rounded`}
        placeholder={placeHolder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        type={type}
        name={name}
      />
    </div>
  );
};

export default Input;
