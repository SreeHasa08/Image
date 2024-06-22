import React from 'react';
import './Image.css';

const Image = ({ src, openModal }) => {
  return (
    <img
      className="gallery-image"
      src={src}
      alt=""
      onClick={() => openModal(src)}
    />
  );
};

export default Image;
