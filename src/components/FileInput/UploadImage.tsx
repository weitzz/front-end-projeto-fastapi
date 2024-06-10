"use client";

import { ChangeEvent, ComponentProps } from "react";

import Root, { useFileInput } from "./Root";
import { Control, Controller } from "react-hook-form";
import ContainerInput from "./ContainerInput";
import ImagePreview from "./ImagePreview";

export type UploadImageProps = {
  name: string;
  control: Control<any>;
};

const UploadImage = ({ control, name }: UploadImageProps) => {
  const { id, onFileSelected } = useFileInput();

  const handleFilesSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }
    const files = Array.from(e.target.files);
    onFileSelected(files);
  };
  console.log(id);
  return (
    <Root>
      <ContainerInput />
      <Controller
        name="imagem"
        control={control}
        defaultValue={null}
        render={({ field: { ref, name } }) => (
          <input
            id={id}
            className="sr-only"
            type="file"
            ref={ref}
            name={name}
            onChange={handleFilesSelected}
          />
        )}
      />
      <ImagePreview />
    </Root>
  );
};

export default UploadImage;
