import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';
import LocationPin from './LocationPin';

function Map({ location, zoomLevel }) {
	// const location = {
	// 		address: '401 N Anaheim Blvd, Anaheim, CA 92805',
	// 		lng: '-117.91379915090289',
	// 		lat: '33.83933792046406',
	// 	};
	// const zoomLevel = 10;

	return (
		<div className='map'>
			<div className='google-map'>
				<GoogleMapReact
					bootstrapURLKeys={process.env.bootstrapURLKeys}
					defaultCenter={location}
					defaultZoom={zoomLevel}>
					<LocationPin
						lat={location.lat}
						lng={location.lng}
						text={location.address}
					/>
				</GoogleMapReact>
			</div>
		</div>
	);
}

export default Map;
