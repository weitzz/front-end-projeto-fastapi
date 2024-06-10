"use client";

import { useMemo } from "react";
import { useFileInput } from "./Root";
import Image from "next/image";

const ImagePreview = () => {
  const { files } = useFileInput();
  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null;
    }

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewURL === null) {
    return <div className="w-full">ImagePreview</div>;
  } else {
    <Image src={previewURL} alt="preview" width={300} height={200} />;
  }
};

export default ImagePreview;
