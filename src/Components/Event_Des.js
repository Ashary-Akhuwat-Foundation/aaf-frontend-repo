import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Event-Des.css';

function Event_Des(props) {
	let navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		// setSignedIn(true);
		if (event.target.id === 'submit') {
			navigate('/artist-landing-page');
		} else if (event.target.id === 'events') {
			navigate('/Events');
		} else if (event.target.id === 'donate') {
			navigate('/Donate');
		} else if (event.target.id === 'contact') {
			navigate('/Contact');
		}
	}

	return (
		<div className='container-fluid description-container'>
			<h1 className='d-flex flex-column align-items-center justify-content-center text-center des-title pt-4'>
				What To Expect:
			</h1>
			<div className='des-div'>
				<h5>A new way to shop art and give back, all at once.</h5>
				<p>
					Everything you love about Art Shows but with an added perk: your
					purchase goes directly towards helping a community rebuild after
					catastrophe.
				</p>
				<p>
					You'll find the venue brimming with thoughtfully-selected art pieces.
					Take your time browsing and selecting the pieces that speak to you.
				</p>
				<p>
					Are you interested in submitting your art to the show? Follow the link
					below and we'll be in touch.
				</p>

				<button id='submit' onClick={handleSubmit}>
					Submit Art
				</button>
			</div>

			<div className='des-div'>
				<h5>An unforgettable in-person experience</h5>
				<p>
					Art for Impact is a one-of-a-kind event that merges art and
					philanthropy to reimagine the giving experience as an immersive
					celebration of the senses.
				</p>

				<a
					href='https://www.eventbrite.com/e/art-for-impact-pakistan-flood-relief-art-show-tickets-442424994067'
					target='blank'>
					<button>Buy Tickets</button>
				</a>
			</div>
			<div className='des-div'>
				<h5>A virtual auction if you can't make it in-person.</h5>
				<p>
					Not local or can't make it to the show? No worries, you have an option
					to experience the event from wherever you are. RSVP to our virtual
					auction to receive a link once we go live.
				</p>

				<a
					href='https://www.eventbrite.com/e/art-for-impact-pakistan-flood-relief-art-show-tickets-442424994067'
					target='blank'>
					<button> RSVP </button>
				</a>
			</div>
		</div>
	);
}

export default Event_Des;
