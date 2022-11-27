//installing react related modules
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css';
import Navbar from './Components/Header/Header';
import About from './Components/About';
import Homepage_banner from './Components/Homepage_banner';

function App() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<Routes>
					<Route path='/home' element={<Homepage_banner />} />
					{/* <Route path='/About' element={About}></Route> */}
					<Route path='/About' element={<About />} />
					{/* <Route path='/home' element={Navbar}></Route> */}
				</Routes>
			</main>
		</div>
	);
}

export default App;
