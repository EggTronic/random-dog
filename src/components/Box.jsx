import React from 'react';
import PropTypes from 'prop-types';

Box.propTypes = {
  url: PropTypes.string,
  type: PropTypes.string
};

function Box({ url, type }) {

  // render element based on whether it is image or video
  function renderBoxEelement(type, url) {
    switch (type) {
      case 'image':
        return <img src={url} alt='img' />;
      case 'video':
        return <video controls>
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
               </video>
      default:
        console.log('invalid type');
    }
  }

  // render Box
  return (
    <div className='box'>
      {renderBoxEelement(type, url)}
    </div>
  )
}

export default Box;

