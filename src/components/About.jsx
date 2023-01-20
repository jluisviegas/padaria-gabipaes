import React from 'react';
import { about, about1, about2, collage, logoshape } from '../assets';
import { styles } from '../constantes/style';
import Clients from './Clients';

const About = () => {
	return (
		<section
			id="products"
			className={`relative flex flex-col min-h-screen sm:px-16 px-6 w-full mt-16`}
		>
			<hr className="border-t-2 border-gray-300" />
			<div className="bg-primary grid md:grid-cols-2 my-16 gap-8">
				<div className="relative h-auto bg-[#e8e6dc] p-12">
					<h1 className={`${styles.heading1}`}>Gabi Pães</h1>
					<h2 className={styles.heading2}>Nossa História</h2>
					<p className={`${styles.paragraph} my-12 mt-24 md:w-1/2`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, totam
						ipsa impedit at iste, asperiores beatae hic obcaecati porro
						laboriosam sapiente vel excepturi! Ad, debitis suscipit! Dolorum
						fugit, sapiente omnis ut, quos adipisci iure ad harum laborum illum
						voluptate temporibus libero quis, similique esse at.
					</p>
					<p className={`${styles.paragraph} mb-12 md:w-1/2`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, totam
						ipsa impedit at iste, asperiores beatae hic obcaecati porro
						laboriosam sapiente vel excepturi! Ad, debitis suscipit! Dolorum
						fugit, sapiente omnis ut, quos adipisci iure ad harum laborum illum
						voluptate temporibus libero quis, similique esse at.
					</p>
					<img
						src={logoshape}
						alt=""
						className="absolute m-auto h-[200px] inset-0 opacity-20"
					/>
				</div>
				<div className="grid grid-cols-2 gap-8">
					<img
						src={about}
						alt=""
						className="col-span-2 h-auto max-h-[600px] w-full object-fit
						"
					/>
					<img
						src={about1}
						alt=""
						className="h-auto max-h-[250px] w-full object-cover"
					/>
					<img
						src={about2}
						alt=""
						className="h-auto max-h-[250px] w-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
