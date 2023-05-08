import React, { useState } from 'react';
import Image from './Image';
import images from './images';

const categories = ['All', 'Category 1', 'Category 2', 'Category 3'];

function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = images.filter((image) =>
    selectedCategory === 'All' ? true : image.category === selectedCategory
  );

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-center mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filteredImages.map((image) => (
          <Image key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
