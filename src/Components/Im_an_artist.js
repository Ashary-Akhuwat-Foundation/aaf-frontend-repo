import React from 'react';
import { useState } from 'react';
import '../Components/Im_an_artist.css';
import logo1 from '../Images/icon1.png';
import easel from '../Images/easel.png';
import people from '../Images/people.png';
import solidarity from '../Images/solidarity.png';
import Footer from './Footer';

function Im_an_artist(props) {
	const [artistSubmit, setArtistSubmit] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		setArtistSubmit(true);
	}
	return (
		<div>
			<div className='main-container'>
				<div className='container-fluid summary-div'>
					<h1>Your Art Helps Rebuild</h1>
					<p>
						Calling all artists to donate their artwork to our upcoming art
						auction. All proceeds will go to efforts to rebuild regions of
						Pakistan affected by the devastating floods. Send us a message with
						a little about yourself and the type of art you'd like to donate and
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
							<input
								type='password'
								className='form-control'
								name='last-name'
							/>
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
						<button className='submit-btn' onClick={handleSubmit}>
							Submit
						</button>
					</div>
					{artistSubmit ? (
						<div className='artist-under-construction-message'>
							Oops! We are sorry but the site is under construction and so your
							information was not recorded! We are working on it!
						</div>
					) : (
						''
					)}
				</form>
			</div>
			<div>
				<h1 className='text-center donate-title'>Why Donate?</h1>
			</div>
			<div className='container-fluid d-flex'>
				<div className='container-fluid col1'>
					<div>
						<div className='img1-container'>
							<img src={logo1} alt='' className='rounded float-left img1' />
						</div>
						<div className='txt1-container'>
							<p>
								TAX DEDUCTIBLE DONATION ONCE YOUR PAINTING HAS SOLD (US Only)
							</p>
						</div>
					</div>
					<div>
						<div className='img2-container'>
							<img src={easel} alt='' className='rounded float-left img1' />
						</div>
						<div className='txt2-container'>
							<p>YOUR WORK FEATURED AT AN IN-PERSON ART SHOW</p>
						</div>
					</div>
				</div>
				<div className='container-fluid col2'>
					<div>
						<div className='img3-container'>
							<img src={people} alt='' className='rounded float-left img1' />
						</div>
						<div className='txt3-container'>
							<p>PROMOTED TO A DIGITAL AUDIENCE VIA AN ONLINE AUCTION</p>
						</div>
					</div>
					<div>
						<div className='img4-container'>
							<img
								src={solidarity}
								alt=''
								className='rounded float-left img1'
							/>
						</div>
						<div className='txt4-container'>
							<p>SUPPORTING AN URGENT CAUSE</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Im_an_artist;
