import React, { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  fallbackSrc?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  objectFit = 'cover',
  fallbackSrc = '/placeholder-image.svg',
}) => {
  const [error, setError] = useState(false);

  const imgStyle: React.CSSProperties = {
    objectFit,
  };

  if (width) imgStyle.width = width;
  if (height) imgStyle.height = height;

  const handleError = () => {
    setError(true);
  };

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      className={className}
      style={imgStyle}
      loading="lazy"
      onError={handleError}
    />
  );
};

export default Image; 