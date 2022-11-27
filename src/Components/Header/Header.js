import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header(props) {
	let navigate = useNavigate();

	const initialFormState = {
		input: '',
	};
	const [formState, setFormState] = useState(initialFormState);

	function handleSignedin(event) {
		event.preventDefault();
		// setSignedIn(true);
		if (event.target.id === 'create') {
			navigate('/createblog');
		} else if (event.target.id === 'discover') {
			navigate('/home');
		} else if (event.target.id === 'about') {
			navigate('/about');
		} else if (event.target.id === 'profile') {
			navigate('/profile');
		}
	}

	function handleSignedOut(event) {
		event.preventDefault();
		// setSignedIn(false);
		localStorage.clear();
		navigate('/');
	}

	function handleChange(event) {
		setFormState({ ...formState, input: event.target.value });
		// setInputQuery(event.target.value);
	}
	return (
		<nav class='navbar navbar-expand-sm bg-light navbar-light'>
			<div class='container-fluid real-navbar'>
				<div class='container-fluid'>
					<a class='navbar-brand' href='#'>
						<img
							src={require('../../Images/af-logo.png')}
							alt='Avatar Logo'
							className='rounded-pill logo'
						/>
					</a>
				</div>
			</div>
			<div class='container-fluid'>
				<ul class='navbar-nav'>
					<li class='nav-item'>
						<a class='nav-link' href='#'>
							About
						</a>
					</li>
					<li class='nav-item'>
						<a class='nav-link' href='#'>
							Events
						</a>
					</li>
					<li class='nav-item'>
						<a class='nav-link' href='#'>
							Donate
						</a>
					</li>
					<li class='nav-item'>
						<a class='nav-link' href='#'>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
