import React from 'react';

const Image = ({ img }) => {
  return (
    <div>
      <img src={img.uri} alt={img.name} />
    </div>
  );
};

export default Image;

// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

// const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <img src="path-to-img" onDragStart={handleDragStart} />,
//   <img src="path-to-img" onDragStart={handleDragStart} />,
//   <img src="path-to-img" onDragStart={handleDragStart} />,
// ];

// const Gallery = () => {
//   return (
//     <AliceCarousel mouseTracking items={items} />
//   );
// }