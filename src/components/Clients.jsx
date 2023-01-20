import React from 'react';
import { clientInstagram, clients } from '../constantes';
import { styles } from '../constantes/style';

const Clients = () => {
	return (
		<section className={`flex flex-col min-h-screen sm:px-16 px-6`}>
			<hr className="border-t-2 border-gray-300 w-full" />
			<div className=" flex flex-col-reverse md:flex-row bg-primary my-16 md:justify-between sm:space-x-12">
				<div className="flex flex-col md:w-1/2">
					<ul className="flex flex-wrap gap-12">
						{clients.map((client, id) => (
							<img
								src={client.img}
								key={client.id}
								className="w-16 h-16 sm:w-28 sm:h-28 opacity-50 transition-opacity duration-300 hover:opacity-100"
							/>
						))}
					</ul>
				</div>
				<div className="flex flex-col items-center md:items-end mb-12">
					<h1 className={`${styles.heading1}`}>Nossos Clientes</h1>
					<p className={`${styles.paragraph}`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisim.
					</p>
				</div>
			</div>
			{/* <div className="flex flex-col mt-28">
				<ul className="flex flex-wrap gap-6">
					{clientInstagram.map((client, id) => (
						<img
							src={client.img}
							key={client.id}
							className="max-w-[320px] h-auto opacity-80 transition duration-300 hover:scale-110"
						/>
					))}
				</ul>
			</div> */}
		</section>
	);
};

export default Clients;
