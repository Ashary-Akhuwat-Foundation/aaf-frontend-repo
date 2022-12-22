import React from 'react';
import { useState } from 'react';
import '../Components/Im_an_artist.css';
import logo1 from '../Images/icon1.png';
import easel from '../Images/easel.png';
import people from '../Images/people.png';
import solidarity from '../Images/solidarity.png';
import Footer from './Footer';
import axios from 'axios';

function Im_an_artist(props) {
	const initialFormState = {
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		message: '',
	};

	const [artistSubmit, setArtistSubmit] = useState(false);
	const [formState, setFormState] = useState(initialFormState);

	function handleChange(event) {
		event.preventDefault();
		setFormState({ ...formState, [event.target.id]: event.target.value });
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		setArtistSubmit(true);
		try {
			const res = await axios.post(
				'https://quiet-chamber-04430.herokuapp.com/api/artistMessages',
				formState
			);
			// if (Response.status === 200) {
			// 	setArtistSubmit(true);
			// }
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<div className='main-container'>
				<div className='container-fluid summary-div'>
					<h1>Your Art Helps Rebuild</h1>
					<p className='artist-cta'>
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
							<input
								required
								type='text'
								id='firstname'
								value={formState.firstname}
								onChange={handleChange}
								className='form-control'
								name='first-name'
							/>
						</div>
						<div className='col'>
							<label htmlFor='last-name'>Last Name</label>
							<input
								required
								type='text'
								id='lastname'
								value={formState.lastname}
								onChange={handleChange}
								className='form-control'
								name='last-name'
							/>
						</div>
					</div>
					<div className='row'>
						<div className='col'>
							<div className='col'>
								<label htmlFor='email'>Email *</label>
								<input
									type='text'
									className='form-control'
									id='email'
									value={formState.email}
									onChange={handleChange}
									name='email'
								/>
							</div>
							<div className='col'>
								<label htmlFor='phone'>Phone</label>
								<input
									type='tel'
									id='phone'
									value={formState.phone}
									onChange={handleChange}
									className='form-control'
									name='phone'
								/>
							</div>
						</div>
						<div className='col'>
							<label htmlFor='Message'>Message</label>
							<textarea
								class='form-control'
								rows='5'
								id='message'
								value={formState.message}
								onChange={handleChange}
								name='message'></textarea>
						</div>
					</div>
					<div className='row'>
						<button className='submit-btn' onClick={handleSubmit}>
							Submit
						</button>
					</div>
					{artistSubmit ? (
						<div className='artist-under-construction-message'>
							Your message has been received! Thank you!
						</div>
					) : (
						''
					)}
				</form>
			</div>
			<div>
				<h1 className='text-center donate-title'>Why Donate?</h1>
			</div>
			<div className='container-fluid d-flex icon-container'>
				<div className='container-fluid col1'>
					<div className='vp1'>
						<div className='img1-container'>
							<img src={logo1} alt='' className='rounded float-left img1' />
						</div>
						<div className='txt1-container'>
							<p className='vp-text'>
								TAX DEDUCTIBLE DONATION ONCE YOUR PAINTING HAS SOLD (US Only)
							</p>
						</div>
					</div>
					<div className='vp2'>
						<div className='img2-container'>
							<img src={easel} alt='' className='rounded float-left img1' />
						</div>
						<div className='txt2-container'>
							<p className='vp-text'>
								YOUR WORK FEATURED AT AN IN-PERSON ART SHOW
							</p>
						</div>
					</div>
				</div>
				<div className='container-fluid col2'>
					<div className='vp3'>
						<div className='img3-container'>
							<img src={people} alt='' className='rounded float-left img1' />
						</div>
						<div className='txt3-container'>
							<p className='vp-text'>
								PROMOTED TO A DIGITAL AUDIENCE VIA AN ONLINE AUCTION
							</p>
						</div>
					</div>
					<div className='vp4'>
						<div className='img4-container'>
							<img
								src={solidarity}
								alt=''
								className='rounded float-left img1'
							/>
						</div>
						<div className='txt4-container'>
							<p className='vp-text'>SUPPORTING AN URGENT CAUSE</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Im_an_artist;
