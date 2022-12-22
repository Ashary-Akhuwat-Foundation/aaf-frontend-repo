import React from 'react';
import './ArtistContentCards.css';

function ArtistContentCards({ name, instagram, bio, artistDisplayPic }) {
	return (
		<li className='blog-card'>
			<div className='image-container'>
				{/* {artistDisplayPic[0].url ? (
					<img src={artistDisplayPic[0].url} alt='' />
				) : (
					''
				)} */}
				{/* <h2>{artistDisplayPic[0].url}</h2>  This doesnt work for images*/}
			</div>
			<div>
				<span className='blog-category-in'>{instagram}</span>
				<h1 className='blog-title-in'>{name}</h1>
				<div className='blog-description-in'>{bio}</div>
			</div>
		</li>
	);
}

export default ArtistContentCards;
