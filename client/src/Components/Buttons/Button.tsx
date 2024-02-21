import React from "react";

interface ButtonPropTypes {
  text: string;
}
const Button = ({ text }: ButtonPropTypes) => {
  return (
    <div className="bg-[#DB4444] cursor-pointer text-center  px-10 rouned-sm text-white py-4">
      {text}
    </div>
  );
};

export default Button;
