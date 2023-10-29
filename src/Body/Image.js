import React from 'react';

const Image = (props) => {
  const { src, className, width, height, alt = 'Sensire', key, ...other } = props;
  return (
    src ? (<img
      src={src}
      className={className}
      width={width}
      height={height}
      alt={alt}
      key={key}
      loading="lazy"
      data-test="image-component"
      {...other}
    />) : (
      <>
      </>
    )
  );
};

export default Image;
