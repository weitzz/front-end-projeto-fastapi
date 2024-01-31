import React from "react";
import {
  Control,
  Controller,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { twMerge } from "tailwind-merge";

interface DatePickerInputProps extends UseControllerProps {
  name: string;
  error?: any;
  control: Control<FieldValues>;
}

const DatePickerInput = ({ name, error, control }: DatePickerInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={null}
      render={({ field, fieldState }) => (
        <>
          <label className="text-gray-500">Data de validade</label>
          {error && <span className="text-rose-600 text-sm mb-1">{error}</span>}
          <div className={twMerge(error && " border-rose-600")}>
            <DatePicker
              {...field}
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat="dd/MM/yyyy"
              className={twMerge(
                "p-2 border-2 w-80 border-gray-100 text-gray-500 rounded-lg",
                fieldState && fieldState.invalid && "border-rose-600"
              )}
            />
          </div>
        </>
      )}
    />
  );
};

export default DatePickerInput;
