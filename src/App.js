//installing react related modules
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css';
import Navbar from './Components/Header/Header';
import About from './Components/About';
import Homepage_banner from './Components/Homepage_banner';
import ImAnArtist from './Components/Im_an_artist';
import Footer from './Components/Footer';
import Events from './Components/Events';
import Event_Des from './Components/Event_Des';
import AuctionLandingPage from './Components/AuctionLandingPage';

function App() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Homepage_banner />} />
					{/* <Route path='/' element={<Events />} />
					<Route path='/' element={<Event_Des />} /> */}
					<Route path='/About' element={<About />} />

					<Route path='/artist-landing-page' element={<ImAnArtist />} />
					<Route
						path='/auction-landing-page'
						element={<AuctionLandingPage />}
					/>
				</Routes>
			</main>
			{/* <footer>
				<Footer />
			</footer> */}
		</div>
	);
}

export default App;
