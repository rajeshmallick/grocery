import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slideshow = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item className='carousel-item'>
          <img
            className='d-block w-100'
            src='../../assets/images/slideshow/dryfruit.jpg'
            alt='First slide'
            height='600'
          />
          <Carousel.Caption className='carousel-caption'>
            <h3 className='text-light'>Dry Fruits</h3>
            {/* <p className='text-light'>Good for your health & keep you fit</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <img
            className='d-block w-100'
            src='../../assets/images/slideshow/vegetable.jpg'
            alt='Third slide'
            height='600'
          />

          <Carousel.Caption className='carousel-caption'>
            <h3 className='text-light'>Vegetables</h3>
            {/* <p>Rich with vitamins & fiber</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <img
            className='d-block w-100'
            src='../../assets/images/slideshow/pulses.jpg'
            alt='Third slide'
            height='600'
          />

          <Carousel.Caption className='carousel-caption'>
            <h3 className='text-light'>Pulses</h3>
            {/* <p style={{ color: "rgb(241, 11, 211)" }}>
              pulses provide protein, complex carbohydrates, and several
              vitamins and minerals
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slideshow;
