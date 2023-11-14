import React, { useRef } from "react";
import {
  UseControllerProps,
  useController,
  Controller,
  Control,
} from "react-hook-form";

interface FileInputProps extends UseControllerProps {
  name: string;
  control: Control;
}

// Define a FileInput component that uses useRef hook and Controller from react-hook-form
const FileInput = ({ name, control, ...rest }: FileInputProps) => {
  const { field } = useController({ name, control });
  return (
    <div>
      <Controller
        name="imagem"
        control={control}
        render={({ field }) => (
          <div>
            <input type="file" {...field} />
          </div>
        )}
      />
    </div>
  );
};

export default FileInput;
