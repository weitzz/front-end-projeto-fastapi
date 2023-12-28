"use-client";

import { Control, Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  disabled: boolean;
  inputIcon?: React.ReactNode;
  name: string;
  error?: any;
  placeholder?: string;
  label?: string;
  defaultValue?: any;
  control: Control<any>;
}

const Input = ({
  name,
  type = "",
  error,
  disabled = false,
  inputIcon,
  placeholder,
  label,
  defaultValue,
  control,
  ...props
}: InputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={""}
      render={({ field }) => (
        <>
          <label className="text-gray-500">{label}</label>
          {error && <span className="text-rose-600 text-sm mb-1">{error}</span>}
          <div
            className={twMerge(
              "p-2 flex items-center border-2 w-80 border-gray-100 text-gray-500 rounded-lg mb-3",
              error && " border-rose-600"
            )}
          >
            <div>{inputIcon}</div>
            <input
              type={type}
              disabled={disabled}
              placeholder={placeholder}
              {...field}
              className={twMerge(
                "text-gray-500  outline-none",
                inputIcon && "m-2",
                disabled && "opacity-50 cursor-default pointer-events-none"
              )}
            />
          </div>
        </>
      )}
    />
  );
};

export default Input;
