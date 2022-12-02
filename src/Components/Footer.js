import React from 'react';
import '../Components/Footer.css';
import { useNavigate } from 'react-router-dom';

function Footer(props) {
	let navigate = useNavigate();
	function handleLogo(event) {
		event.preventDefault();
		navigate('/');
	}

	function handleClick(event) {
		event.preventDefault();
		// setSignedIn(true);
		if (event.target.id === 'about') {
			navigate('/About');
		} else if (event.target.id === 'events') {
			navigate('/Events');
		} else if (event.target.id === 'donate') {
			navigate('/Donate');
		} else if (event.target.id === 'contact') {
			navigate('/Contact');
		}
	}

	return (
		<footer className='custom-footer'>
			<div className='container-fluid main-footer-container'>
				<div>
					<a
						className='navbar-brand float-left footer-logo'
						onClick={handleLogo}>
						<img
							src={require('../Images/af-logo.png')}
							alt='Avatar Logo'
							className='rounded-pill footer-logo'
						/>
					</a>
				</div>
				<div className='container d-flex flex-column align-items-center justify-content-center text-center footer-links'>
					<a href='#' id='about' onClick={handleClick}>
						About
					</a>

					{/* <a href='#' id='events' onClick={handleClick}>
						Events
					</a> */}

					<a
						href='https://akhuwatusa-bloom.kindful.com/?campaign=1220055'
						id='donate'
						target='blank'>
						Donate
					</a>

					{/* <a href='#' id='contact' onClick={handleClick}>
						Contact
					</a> */}
				</div>
			</div>
			<div className='text-sm-right p-0 created-by'>
				Created by Shraddha Anand and Meesum Ashary
			</div>
		</footer>
	);
}

export default Footer;
