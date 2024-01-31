import React from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal = ({ isOpen, closeModal, children, title }: ModalProps) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <Title text={title} />
              <button onClick={closeModal}>X</button>
            </div>
            <div className="relative p-5 flex-auto flex flex-col gap-5">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
};

export default Modal;
