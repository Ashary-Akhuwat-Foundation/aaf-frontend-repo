import React from 'react';
import '../Components/Im_an_artist.css';

function Im_an_artist(props) {
	return (
		<div className='main-container'>
			<div className='container summary-div'>
				<h1>Your Art Helps Rebuild</h1>
				<p>
					Calling all artists to donate their artwork to our upcoming art
					auction. All proceeds will go to efforts to rebuild regions of
					Pakistan affected by the devastating floods. Send us a message with a
					little about yourself and the type of art you'd like to donate and
					we'll be in touch.
				</p>
			</div>
			<form>
				<h3 className='form-title text-center'>Artist Submission</h3>
				<div className='row'>
					<div className='col'>
						<label htmlFor='first-name'>First Name</label>
						<input type='text' className='form-control' name='first-name' />
					</div>
					<div className='col'>
						<label htmlFor='last-name'>Last Name</label>
						<input type='password' className='form-control' name='last-name' />
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<div className='col'>
							<label htmlFor='email'>Email *</label>
							<input type='text' className='form-control' name='email' />
						</div>
						<div className='col'>
							<label htmlFor='phone'>Phone</label>
							<input type='tel' className='form-control' name='phone' />
						</div>
					</div>
					<div className='col'>
						<label htmlFor='Message'>Message</label>
						<textarea class='form-control' rows='5' name='message'></textarea>
					</div>
				</div>
				<div className='row'>
					<button className='submit-btn'>Submit</button>
				</div>
			</form>
		</div>
	);
}

export default Im_an_artist;
