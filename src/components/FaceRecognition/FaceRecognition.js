import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='inline-flex justify-center'>
      <div className='absolute mt2 center'>
        <img id='inputImage' src={imageUrl} alt='' />
        <div
          className='bounding-box'
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};
export default FaceRecognition;
