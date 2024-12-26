import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
}
const Button = ({ children, className, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-primary text-white p-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
