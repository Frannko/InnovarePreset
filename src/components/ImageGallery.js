import React, { useState } from "react";

const ImageGallery = () => {
  const images = [
    "/images/image.test.jpg",
    "/images/image.test1.png",
    "/images/image.test2.png",
    "/images/image.test3.png",
    "/images/image.test4.png",
    "/images/image.test5.png",
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const openGallery = (index) => {
    setActiveImageIndex(index);
  };

  const closeGallery = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-gallery px-44 py-16">
      <div className="text-center my-4">
        <div>
          <h2
            id="galeria"
            className="bg-gradient-to-r from-[#4ec4f7] to-[#009ce6] bg-clip-text text-transparent text-lg font-bold"
          >
            GALERIA
          </h2>
        </div>
        <span className="text-3xl font-bold text-center text-gray-800">
          Presentacion
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            className="cursor-pointer w-full h-[400px] object-cover rounded-lg shadow-md"
            onClick={() => openGallery(index)}
          />
        ))}
      </div>

      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            className="absolute top-4 right-4 text-3xl text-white"
            onClick={closeGallery}
            aria-label="Cerrar Galería"
          >
            ✕
          </button>
          <button
            className="absolute left-4 text-3xl text-white"
            onClick={prevImage}
            aria-label="Imagen Anterior"
          >
            &#10094;
          </button>
          <button
            className="absolute right-4 text-3xl text-white"
            onClick={nextImage}
            aria-label="Siguiente Imagen"
          >
            &#10095;
          </button>
          <img
            src={images[activeImageIndex]}
            alt={`Imagen ampliada ${activeImageIndex + 1}`}
            className="max-w-full max-h-[700px] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
