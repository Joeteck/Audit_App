import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import { car1, car2, car3, } from '../assets/images'


const SliderContainer = styled.div`
  position: absolute;
  top: -105%;
  left: 0;
  width: 100%;
  height: 30%;
  opacity: 0.5;
  ${'' /* z-index: 1; */}
`;

const ImageSlider = () => {
  return (
    <SliderContainer>
      <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false}>
        <div>
          <img src={car1} alt="Image 1" />
        </div>
        <div>
          <img src={car2}  alt="Image 2" />
        </div>
        <div>
          <img src={car3}  alt="Image 3" />
        </div>
      </Carousel>
    </SliderContainer>
  );
};

export default ImageSlider;
