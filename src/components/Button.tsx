import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
}

function Button({ children, onClick, type, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className="mt-2 rounded-md border-[2px] border-[#000] px-5 py-3 transition-all duration-500 hover:bg-[#000] hover:text-white disabled:opacity-40 dark:bg-white dark:text-black dark:hover:border-white"
    >
      {children}
    </button>
  );
}

export default Button;
