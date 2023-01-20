import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { arrow, paoslide1, paoslide2, paoslide3, wheat } from '../assets';
import { imgSlider } from '../constantes';
import { styles } from '../constantes/style';

import Button from './Button';
import CTA from './CTA';
import ImageSlider from './ImageSlider';

const Home = () => {
	return (
		<section
			id="home"
			className={`${styles.bigContainer} relative h-screen flex gap-x-10 justify-between`}
		>
			<div className="absolute sm:block hidden bg-primaryDark w-[40%] h-screen right-0 top-0">
				<img
					src={wheat}
					alt=""
					className="absolute top-0 opacity-10 w-[200px] h-auto -left-32"
				/>
				<ImageSlider slides={imgSlider} />
			</div>

			<div className=" flex flex-col bg-primary xl:max-w-[1280px] w-full sm:w-1/2 mt-10">
				<h2 className={`${styles.heading2} text-lightYellow`}>
					Bem-vindo à Gabi Pães e Cia
				</h2>
				<h1 className={styles.heading1}>Ingrediente especial.</h1>
				<h1 className={`${styles.heading1} mb-8`}>Sabor Artesanal.</h1>
				<p className={`${styles.paragraph} mb-12`}>
					Qualidade para oferecer aos nossos clientes produtos inovadores que
					satisfaçam planamente as suas exigências. Temos uma grande variedade
					de produtos para atender se negócio.
				</p>
				<div className="flex flex-col space-y-12 md:space-y-24 items-start">
					<CTA title="Faça seu pedido" styles="w-48" />
					{/* <Button
						title="Conheça o nosso catálogo"
						icon={<AiOutlineArrowRight />}
					/> */}
				</div>
			</div>
		</section>
	);
};

export default Home;
