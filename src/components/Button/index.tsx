import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`w-full px-8 py-5 flex items-center justify-center bg-main text-white font-bold text-lg rounded-lg hover:bg-main-light hover:text-gray-title ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
