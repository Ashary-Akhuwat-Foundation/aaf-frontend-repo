import React from 'react';

function AuctionLandingPage(props) {
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
						<button>Sign up</button>
					</a>
				</div>

				<div className='des-div'>
					<h5>Already have an account?</h5>
					<a href=''>
						<button>Sign in</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default AuctionLandingPage;
