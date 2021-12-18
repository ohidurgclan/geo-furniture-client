import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from '../../../image/slider/slider-001.jpg';
import image2 from '../../../image/slider/slider-002.jpg';
import image3 from '../../../image/slider/slider-003.jpg';


const HomeSlider = () => {
    return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img height="700px" width="100%" src={image1} alt="" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img height="700px" width="100%" src={image2} alt="" />
          </div>
        </div>
        <div className="each-fade">
            <div className="image-container">
                <img height="700px" width="100%" src={image3} alt="" />
            </div>
        </div>
      </Fade>
    </div>
    );
};

export default HomeSlider;