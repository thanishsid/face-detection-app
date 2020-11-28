import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './icon-brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <Tilt
      className='Tilt inline-flex br3 shadow-3 mb3'
      tiltReverse={true}
      perspective={900}
      scale={1.1}
      tiltMaxAngleX={35}
      tiltMaxAngleY={35}
      transitionSpeed={2500}
      gyroscope={true}
    >
      <img src={brain} className='inner-element center' alt='Brain Icon' />
    </Tilt>
  );
};

export default Logo;
