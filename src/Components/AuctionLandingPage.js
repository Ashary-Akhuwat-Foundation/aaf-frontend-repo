import React from 'react';
import { useState } from 'react';

function AuctionLandingPage(props) {
	const [signUp, setSignUp] = useState(false);
	const [signIn, setSignIn] = useState(false);

	function handleSignUp(event) {
		event.preventDefault();
		setSignUp(true);
	}

	function handleSignIn(event) {
		event.preventDefault();
		setSignIn(true);
	}
	return (
		<div className='container-fluid description-container'>
			<h1 className='d-flex flex-column align-items-center justify-content-center text-center des-title pt-4'>
				Your chance to give back
			</h1>
			<div className='d-flex flex-column align-items-center justify-content-center text-center pt-4'>
				<div className='des-div'>
					<h5>New member?</h5>
					<p>Sign up for an account!</p>
					<a href=''>
						<button onClick={handleSignUp}>Sign up</button>
					</a>
					{signUp ? (
						<div className='artist-under-construction-message'>
							Oops! We are sorry but the site is under construction and so your
							information was not recorded! We are working on it!
						</div>
					) : (
						''
					)}
				</div>

				<div className='des-div'>
					<h5>Already have an account?</h5>
					<a href=''>
						<button onClick={handleSignIn}>Sign in</button>
					</a>
					{signIn ? (
						<div className='artist-under-construction-message'>
							Oops! We are sorry but the site is under construction and so your
							information was not recorded! We are working on it!
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
}

export default AuctionLandingPage;
