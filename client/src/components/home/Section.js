import React from "react";

function Section() {
  return (
    <div className='section-main d-flex justify-content-around align-items-center'>
      <div className='card section-product'>
        <img
          className='card-img-top'
          src='../../assets/images/section/dryfruit.jpg'
          alt='Cardimagecap'
        />
        <div className='card-body p-0 pt-1'>
          <a href='!#' className='btn btn-primary w-100'>
            Dry Fruits
          </a>
        </div>
      </div>
      <div className='card  section-product'>
        <img
          className='card-img-top'
          src='../../assets/images/section/vegetable.jpg'
          alt='Cardimagecap'
        />
        <div className='card-body p-0 pt-1'>
          <a href='!#' className='btn btn-primary w-100'>
            Vegetables
          </a>
        </div>
      </div>
      <div className='card section-product'>
        <img
          className='card-img-top'
          src='../../assets/images/section/dairy.jpg'
          alt='Cardimagecap'
        />
        <div className='card-body p-0 pt-1'>
          <a href='!#' className='btn btn-primary w-100'>
            Dairy Product
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section;
