import React, { useState } from 'react';
import Modal from './Modal';

function Image({ image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="cursor-pointer" onClick={handleOpenModal}>
        <img src={image.thumbnail} alt={image.title} className="w-full h-full object-cover" />
      </div>

      {isModalOpen && (
        <Modal
          image={image}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default Image;
