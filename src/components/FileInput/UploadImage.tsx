"use client";
import { UseControllerProps, Controller, Control } from "react-hook-form";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TMedicamento } from "@/src/types/types";
import ContainerInput from "./ContainerInput";

interface UploadImageProps extends UseControllerProps {
  name: string;
  control: Control;
  medicamento?: TMedicamento;
}

const UploadImage = ({ control, medicamento }: UploadImageProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(
    medicamento ? medicamento.imagem : null
  );

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  return (
    <>
      <Controller
        name="imagem"
        control={control}
        defaultValue={null}
        render={({ field: { ref, name, onChange } }) => (
          <ContainerInput>
            <input
              id="dropzone-file"
              className="hidden"
              type="file"
              ref={ref}
              name={name}
              onChange={(e) => {
                const file = e.target.files?.[0];
                onChange(file);
                setImagePreview(file ? URL.createObjectURL(file) : null);
              }}
            />
          </ContainerInput>
        )}
      />
      {imagePreview && (
        <Image src={imagePreview} alt="preview" width={200} height={200} />
      )}
    </>
  );
};

export default UploadImage;
