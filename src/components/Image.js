import React from 'react';

const images = [
  {
    uri: 'https://i.ibb.co/R3GM4GB/IMG-20210131-WA0006.jpg',
    name: 'image 1'
  },
  {
    uri: 'https://i.ibb.co/16f0ywT/IMG-20210131-WA0007.jpg',
    name: 'image 2'
  },
  {
    uri: 'https://i.ibb.co/931RJK1/IMG-20210131-WA0005.jpg',
    name: 'image 3'
  },
  {
    uri: 'https://i.ibb.co/9yk3Gkz/IMG-20210131-WA0003.jpg',
    name: 'image 4'
  },
  {
    uri: 'https://i.ibb.co/WsrcKCf/IMG-20210131-WA0004.jpg',
    name: 'image 5'
  },
  {
    uri: 'https://i.ibb.co/5k92Qq7/IMG-20210131-WA0000.jpg',
    name: 'image 6'
  },
  {
    uri: 'https://i.ibb.co/tph02Fp/IMG-20210131-WA0002.jpg',
    name: 'image 7'
  },
  {
    uri: 'https://i.ibb.co/nbB7rZ4/IMG-20210131-WA0001.jpg',
    name: 'image 8'
  }
];

const Image = () => {
  return <img src="" alt="img" />
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