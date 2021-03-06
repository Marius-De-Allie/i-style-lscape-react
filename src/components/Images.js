import React from 'react';
import Image from './Image';
import { images } from '../utils/data';

const Images = () => {
  return (
    <React.Fragment>
      {images.map(img => <Image key={img.uri} img={img} />)}
    </React.Fragment>
  )
};

export default Images;