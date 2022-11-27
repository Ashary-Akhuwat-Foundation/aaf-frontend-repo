import './About.css';

function About(props) {
	return (
		<div className='container-fluid about-container d-flex flex-column align-items-center justify-content-center text-center pt-5'>
			<p className='about-title vollkorn'>Our Story</p>
			<p className='about-text default-font'>
				The Ashary Foundation is a group of Pakistani young professionals based
				out of California and the world who believe in the power of building
				community to drive social change. We aspire to be a uniting force in the
				world, bridging gaps between cultures and building bridges of
				understanding via art and storytelling in a digital world. Our objective
				is to build an inclusive community that represents the South Asian
				diaspora, while also celebrating our unique identities. We seek to be a
				catalyst for social change and empower our community to effect positive
				change in the world. Our objective is to facilitate a next-generation
				approach to the problems that affect our world, especially the South
				Asian diaspora.
			</p>
		</div>
	);
}

export default About;
