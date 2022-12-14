import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header(props) {
	let navigate = useNavigate();

	function handleClick(event) {
		event.preventDefault();
		// setSignedIn(true);
		if (event.target.id === 'about') {
			navigate('/About');
		} else if (event.target.id === 'events') {
			navigate('/Events');
		} else if (event.target.id === 'contact') {
			navigate('/Contact');
		} else if (event.target.id == 'auction') {
			navigate('/auction-landing-page');
		}
	}

	function handleLogo(event) {
		event.preventDefault();
		navigate('/');
	}

	return (
		<nav className='navbar navbar-expand-sm bg-light navbar-light py-0 '>
			<div className='container-fluid real-navbar'>
				<div className='container-fluid'>
					<a className='navbar-brand' onClick={handleLogo}>
						<img
							src={require('../../Images/af-logo.png')}
							alt='Avatar Logo'
							className='rounded-pill logo'
						/>
					</a>
				</div>
			</div>
			<div className='container-float pr-5'>
				<ul className='navbar-nav '>
					<li className='nav-item'>
						<a className='nav-link' href='#' id='about' onClick={handleClick}>
							About
						</a>
					</li>
					{/* <li className='nav-item'>
						<a className='nav-link' href='#' id='events' onClick={handleClick}>
							Events
						</a>
					</li> */}
					<li className='nav-item'>
						<a
							className='nav-link'
							href='https://akhuwatusa-bloom.kindful.com/?campaign=1220055'
							id='donate'
							target='blank'>
							Donate
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#' id='auction' onClick={handleClick}>
							Auction
						</a>
					</li>
					{/* <li className='nav-item'>
						<a className='nav-link' href='#' id='contact' onClick={handleClick}>
							Contact
						</a>
					</li> */}
				</ul>
			</div>
		</nav>
	);
}

export default Header;
