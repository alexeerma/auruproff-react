import React from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

function Modal({ image, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-75"></div>

      <div className="relative z-10">
        <button className="absolute top-0 right-0 p-4" onClick={onClose}>
          <FiX size={24} color="white" />
        </button>

        <div className="flex items-center justify-center">
          <button className="p-4" disabled={!image.previous} onClick={image.previous}>
            <FiChevronLeft size={24} color="white" />
          </button>

          <img src={image.fullSize} alt={image.title} className="w-auto h-screen" />

          <button className="p-4" disabled={!image.next} onClick={image.next}>
            <FiChevronRight size={24} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
