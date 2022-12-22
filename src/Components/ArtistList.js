import React from 'react';
import { useState } from 'react';
import ArtistContentCards from './ArtistContentCards';
import './ArtistList.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ArtistList(props) {
	let navigate = useNavigate();
	const [currentArtist, setCurrentArtist] = useState([]);
	const [searchInput, setSearchInput] = useState([]);

	//fetch artist data
	const getArtists = async () => {
		try {
			const res = await axios.get(
				'https://quiet-chamber-04430.herokuapp.com/api/Artists'
			);
			let data = res.data;
			setCurrentArtist(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getArtists();
	}, []);
	return (
		<div className='container-fluid d-flex flex-column align-items-center'>
			<p className='default-font home-title-in text-center'>Meet the Artists</p>

			<ul className='blog-container'>
				{currentArtist
					// .filter((artist) => {
					// 	if (searchInput == '') {
					// 		return artist;
					// 	} else if (
					// 		post.title.toLowerCase().includes(searchInput.toLowerCase())
					// 	) {
					// 		return post;
					// 	}
					// })
					.map((artist) => {
						return (
							<ArtistContentCards
								name={artist.name}
								bio={artist.bio}
								createdAt={artist.createdAt}
								id={artist._id}
								getPosts={getArtists}
								instagram={artist.instagram}
								artistDisplayPic={artist.artistDisplayPic}
								// votes={post.votes}
								key={artist._id}
							/>
							// console.log(artist)
						);
					})}
			</ul>
		</div>
	);
}

export default ArtistList;
