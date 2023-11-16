"use-client";

import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name = "", type = "", ...props }, ref) => {
    return (
      <>
        <input
          name={name}
          ref={ref}
          type={type}
          {...props}
          className="  text-gray-500  rounded outline-none"
        />
      </>
    );
  }
);

export default Input;
