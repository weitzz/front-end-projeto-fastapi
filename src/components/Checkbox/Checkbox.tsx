import {
  UseControllerProps,
  useController,
  Controller,
  Control,
} from "react-hook-form";

interface CheckBoxInputProps extends UseControllerProps {
  name: string;
  control: Control;
  defaultValue: boolean;
}

const CheckBoxInput = ({
  name,
  control,
  defaultValue,
  ...rest
}: CheckBoxInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <div className="w-full md:w-1/2 px-3 ">
          <label className="text-gray-500 mr-2">Estoque</label>
          <input
            id="default-checkbox"
            type="checkbox"
            {...field}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      )}
    />
  );
};

export default CheckBoxInput;
