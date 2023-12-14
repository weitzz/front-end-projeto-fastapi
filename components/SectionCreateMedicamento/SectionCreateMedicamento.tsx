"use client";
import { useState } from "react";
import Button from "../Button/Button";
import ModalCreate from "../ModalCreate/ModalCreate";

const LayoutMedicamentos = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        className="border-2 w-auto border-white bg-green-600
                    text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center mb-4
                    justify-center font-semibold hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 transition duration-150 ease-in-out"
        onClick={() => setShowModal(true)}
      >
        Adicionar
      </Button>
      <ModalCreate show={showModal} setShow={() => setShowModal(false)} />
    </>
  );
};

export default LayoutMedicamentos;
