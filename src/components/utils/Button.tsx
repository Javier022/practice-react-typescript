import { ReactNode } from "react";

interface Props {
  fn?: () => void;
  text?: string;
  children?: ReactNode;
}

const Button = ({ children, fn, text }: Props) => {
  return (
    <button
      onClick={fn && fn}
      className="bg-blue-600 px-8 py-1 rounded-md align-middle"
    >
      {text && text}
      {children}
    </button>
  );
};

export default Button;
