import React from 'react';
import Events from './Events';
import Event_Des from './Event_Des';
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
				<h5 className='event-title'>ART FOR IMPACT:</h5>
				<h1 className='event-title-des'>
					Pakistan Flood <br></br> Relief Art Show
				</h1>
				<h5 className='event-date'>03.05.23 | COLONY HOUSE ANAHEIM</h5>
				<div className='btn-div'>
					<button>ATTEND</button>
					<button>I'M AN ARTIST</button>
				</div>
			</div>
			<Events />
			<Event_Des />
		</div>
	);
}

export default Homepage_banner;
