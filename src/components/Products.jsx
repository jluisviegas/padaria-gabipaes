import React from 'react';
import { paoslide1 } from '../assets';
import { imgSlider } from '../constantes';
import { styles } from '../constantes/style';
import Button from './Button';
import ImageSlider from './ImageSlider';

const Products = () => {
	return (
		<section
			id="products"
			className={`${styles.bigContainer} bg-primary justify-center items-center`}
		>
			<hr className="border-t-2 border-gray-300" />

			<div className=" flex flex-col md:flex-row items-center  my-16	">
				<div className="relative md:w-1/2 h-auto">
					<h1 className={styles.heading1}>
						Nossos <br /> Produtos
					</h1>
					<p className={`${styles.paragraph}`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisim.
					</p>
					<div className="mt-10">
						<Button title="Baixar Catálogo" />
					</div>
				</div>
				<div className="grid grid-cols-2 w-1/2 p-12 gap-10">
					<div className="relative ">
						<img src={paoslide1} alt="" className="" />
						<h2 className={`${styles.heading2} absolute inset-0`}>Pao</h2>
					</div>
					<div className="relative ">
						<img src="" alt="" />
						<h2>Pao</h2>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;
