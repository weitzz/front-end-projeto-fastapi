"use client";
import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from "react";
export type RootProps = ComponentProps<"div">;
export type FileInputContextType = {
  id: string;
  files: File[];
  onFileSelected: (files: File[]) => void;
};

const FileInputContext = createContext({} as FileInputContextType);

const Root = (props: RootProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const id = useId();
  console.log(id);
  return (
    <FileInputContext.Provider value={{ id, files, onFileSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
};

export const useFileInput = () => useContext(FileInputContext);

export default Root;
