import React from 'react';
import Carousel from "react-multi-carousel";
import { IoImagesOutline } from 'react-icons/io5';
import "react-multi-carousel/lib/styles.css";
import Images from '../components/Images';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const GalleryPage = props => {

  return (
    <div className="outer-container">
      <p className="gallery-header">{`Gallery `}<IoImagesOutline /></p>
      

      <div className="inner-container">
        <Carousel
        draggable={false}
        showDots={true}
        responsive={responsive}
        swipeable={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
          <div className="image-container">
            <p className="caption">Before</p>
            <img src="https://i.ibb.co/5k92Qq7/IMG-20210131-WA0000.jpg" alt="" />
          </div>
          <div className="image-container">
            <p className="caption">During</p>
            <img src="https://i.ibb.co/tph02Fp/IMG-20210131-WA0002.jpg" alt="" />
          </div>
          <div className="image-container">
            <p className="caption">After</p>
            <img src="https://i.ibb.co/nbB7rZ4/IMG-20210131-WA0001.jpg" alt="" />
          </div>
          <div className="image-container">
            <p className="caption">Before</p>
            <img src="https://i.ibb.co/16f0ywT/IMG-20210131-WA0007.jpg" alt="" />
          </div>
          <div className="image-container">
            <p className="caption">Before</p>
            <img src="https://i.ibb.co/9yk3Gkz/IMG-20210131-WA0003.jpg" alt="" />
          </div>
          <div className="image-container">
            <p className="caption">During</p>
            <img src="https://i.ibb.co/R3GM4GB/IMG-20210131-WA0006.jpg" alt="" />
          </div>
          <div className="image-container">
            <p className="caption">After</p>
            <img src="https://i.ibb.co/WsrcKCf/IMG-20210131-WA0004.jpg" alt="" />
          </div>
          <div className="image-container">
            <p className="caption">After</p>
            <img src="https://i.ibb.co/931RJK1/IMG-20210131-WA0005.jpg" alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );

};

export default GalleryPage;

// <p>
// Gallery
// </p>





// <Carousel
//   swipeable={false}
//   draggable={false}
//   showDots={true}
//   responsive={responsive}
//   ssr={true} // means to render carousel on server-side.
//   infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
//   autoPlaySpeed={1000}
//   keyBoardControl={true}
//   customTransition="all .5"
//   transitionDuration={500}
//   containerClass="carousel-container"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
//   dotListClass="custom-dot-list-style"
//   itemClass="carousel-item-padding-40-px"
// >
//   <div>Item 1</div>
//   <div>Item 2</div>
//   <div>Item 3</div>
//   <div>Item 4</div>
// </Carousel>;