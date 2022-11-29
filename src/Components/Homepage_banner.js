import React from 'react';
import './Homepage-banner.css';

function Homepage_banner(props) {
	return (
		// <img
		// 	src={require('../Images/homepage-banner.png')}
		// 	alt=''
		// 	className='homepage-banner'
		// />
		<div className='homepage-banner'>
			<div className='homepage-banner-text'>
				<h5>ART FOR IMPACT:</h5>
				<h1>Pakistan Flood Relief Art Show</h1>
				<h5>03.05.23 | COLONY HOUSE ANAHEIM</h5>
				<div className='btn-div'>
					<button>ATTEND</button>
					<button>I'M AN ARTIST</button>
				</div>
			</div>
		</div>
	);
}

export default Homepage_banner;
