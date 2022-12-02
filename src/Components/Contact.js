import React from 'react';
import '../Components/Contact.css';

function Contact(props) {
	return (
		<div className='container-fluid contact-container'>
			<div className='container-fluid column1'>
				<h1>More Events To Come</h1>
				<h5>Get added to our VIP list for invitations to upcoming events!</h5>
				<form className='contact-form'>
					<label htmlFor='email'>Email * </label>
					<input name='email' type='email' placeholder='Enter your email' />
					<button> SUBMIT</button>
				</form>
			</div>
			<div className='container-fluid column2'>
				<div>
					<h5>HAVE AN EVENT YOU'D LIKE TO HOST?</h5>
					<p>
						We love it when our community gets involved. Reach out to us if you
						have an event or experience you’d like us to collaborate with you
						on.
					</p>
				</div>
				<div>
					<h5>CONTACT US AT</h5>
					<p>theasharyfoundation@gmail.com</p>
				</div>
			</div>
		</div>
	);
}

export default Contact;
