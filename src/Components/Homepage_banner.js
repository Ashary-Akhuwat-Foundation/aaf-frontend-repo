import React from 'react';
import './Homepage-banner.css';

function Homepage_banner(props) {
	return (
		<div className='homepage-banner'>
			<img src={require('../Images/homepage-banner.png')} alt='' />
		</div>
	);
}

export default Homepage_banner;
