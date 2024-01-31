"use client";
import { useState, useCallback } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const toggleModal = useCallback(() => {
    setIsModalOpen((prevState) => !prevState);
  }, []);

  console.log(isModalOpen);
  console.log(openModal);
  console.log(closeModal);
  console.log(toggleModal);

  return { isModalOpen, openModal, closeModal, toggleModal };
};

export default useModal;
