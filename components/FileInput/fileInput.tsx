import React, { ChangeEvent, useRef } from "react";
import Image from "next/image";
import {
  UseControllerProps,
  useController,
  Controller,
  Control,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";

interface FileInputProps {
  file: any;
  name: string;
  control: Control;
  handleImgChange: any;
}

const FileInput = ({
  name,
  file,
  control,
  handleImgChange,
  ...rest
}: FileInputProps) => {
  return (
    <Controller
      name="imagem"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 md:mb-0">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-200 border-dashed rounded-lg cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Upload de imagem</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG ou JPG (MAX. 800x400px)
                  </p>
                </div>
              </label>
            </div>
            <input
              {...field}
              type="file"
              id="dropzone-file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                field.onChange(e);
                handleImgChange(e);
              }}
            />
          </div>
          <div className="flex items-center justify-center w-full pt-6">
            {field.value && (
              <Image
                src={URL.createObjectURL(field.value[0])}
                alt="Imagem selecionada"
                width="350"
                height="350"
              />
            )}
          </div>
        </div>
      )}
    />
  );
};

export default FileInput;
