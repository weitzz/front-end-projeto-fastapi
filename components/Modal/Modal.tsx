import React, { useState } from 'react'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  if (!modalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
      <div className="relative z-10 bg-white w-96 p-4">
        <button className="absolute top-2 right-2" onClick={closeModal}>
          Fechar
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;