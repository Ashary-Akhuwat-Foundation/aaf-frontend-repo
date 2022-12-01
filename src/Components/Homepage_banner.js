import React from 'react';
import Events from './Events';
import Event_Des from './Event_Des';
import './Homepage-banner.css';
import { useNavigate } from 'react-router-dom';

function Homepage_banner(props) {
	let navigate = useNavigate();

	function handleClick(event) {
		event.preventDefault();
		navigate('artist-landing-page');
	}
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
					<a
						href='https://www.eventbrite.com/e/art-for-impact-pakistan-flood-relief-art-show-tickets-442424994067'
						target='blank'>
						<button className='homepage-btn'>ATTEND</button>
					</a>
					<button className='homepage-btn' onClick={handleClick}>
						I'M AN ARTIST
					</button>
				</div>
			</div>
			<Events />
			<Event_Des />
		</div>
	);
}

export default Homepage_banner;
