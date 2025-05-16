import type { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ onClick, children, className = "", type = "button" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-6 py-2 font-bold text-base rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
