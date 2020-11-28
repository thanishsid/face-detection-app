import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This magic app will detect faces in your pictures. Give it a try.'}
      </p>
      <div className='flex justify-center'>
        <div className='pa4 br3 shadow-5 bgForm w-90 w-50-l  '>
          <input
            id='formInput'
            type='text'
            className='f4 pa2 w-70 center'
            onChange={onInputChange}
          />
          <button
            id='formBtn'
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer'
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
