import React from 'react';
import PropTypes from 'prop-types';

Box.propTypes = {
	url: PropTypes.string,
	type: PropTypes.string
};

function Box({ url, type }) {
	let boxElement;

	switch (type) {
		case 'image':
			boxElement = <img src={url} alt='img' />;
			break;
		case 'video':
			boxElement = <video controls>
										 <source src={url} type="video/mp4" />
										 Your browser does not support the video tag.
									 </video>
			break;
		default:
			console.log('invalid type');
	}

	return (
		<div className='box'>
			{boxElement}
		</div>
	)
}

export default Box;

