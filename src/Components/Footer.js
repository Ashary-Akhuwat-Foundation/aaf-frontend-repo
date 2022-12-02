import React from 'react';
import '../Components/Footer.css';
import { useNavigate } from 'react-router-dom';

function Footer(props) {
	let navigate = useNavigate();
	function handleLogo(event) {
		event.preventDefault();
		navigate('/');
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
					<a href=''>ABOUT</a>
					<a href=''>EVENTS</a>
					<a href=''>DONATE </a>
					<a href=''>CONTACT</a>
				</div>
			</div>
			<div className='text-sm-right p-0 created-by'>
				Created by Shraddha Anand and Meesum Ashary
			</div>
		</footer>
	);
}

export default Footer;
