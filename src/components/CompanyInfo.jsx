import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { client1, client2, client3, logoshape } from '../assets';
import { styles } from '../constantes/style';
import Button from './Button';

const CompanyInfo = () => {
	return (
		<section
			id="products"
			className={` ${styles.bigContainer} relative min-h-screen`}
		>
			<hr className="border-t-2 border-gray-300 w-full" />
			<div className="flex flex-1 mx-auto my-12 h-auto w-full">
				{/* Info */}
				<div className="grid md:grid-cols-2 gap-8  w-full h-auto">
					<div className="px-10 py-6 flex flex-col justify-between bg-primaryDark">
						<h1 className={`${styles.heading3}	text-primary`}>Onde Estamos</h1>
						<div className="flex mt-2">
							<div className="flex flex-col justify-center">
								<p className={`${styles.paragraph}	text-primary`}>
									R. Santa Catarina, 151.
								</p>
								<p className="text-primary font-roboto text-[14px] sm:text-[15px] md:text-[17px]">
									Jardim Eldorado, São Luís - MA
								</p>
								<p className="text-primary font-roboto text-[14px] sm:text-[15px] md:text-[17px]">
									CEP: 65066-849
								</p>
								<Button title="Mapa" className="" />
							</div>
						</div>

						<div className="mb-6">
							<h2 className={`${styles.heading2}	text-primary`}>
								Horário de funcionamento <BiTimeFive />
							</h2>
							<div className="flex gap-4 sm:gap-6">
								<div className="flex flex-col justify-center">
									<p className={`${styles.paragraph} text-primary`}>
										Segunda à Domingo
									</p>
									<p className={`${styles.paragraph} text-primary`}>
										07h30 | 18h00
									</p>
								</div>
							</div>
						</div>

						<div className="mb-6">
							<h2 className={`${styles.heading2}	text-primary`}>
								Entre em Contato <AiOutlinePhone />
							</h2>
							<div className="flex gap-4 sm:gap-6">
								<div className="flex flex-col justify-center">
									<p className={`${styles.paragraph} text-primary`}>
										(98) 99177-9600
									</p>
									<p className={`${styles.paragraph} text-primary`}>
										gabipaes-cia@outlook.com
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Map */}
					<div className="w-full">
						<h1 className={styles.heading3}>instagram @gabi</h1>
						<div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
							<img
								src={client1}
								alt=""
								className="w-[240px] md:min-h-[200px] h-auto object-cover"
							/>
							<img
								src={client1}
								alt=""
								className="w-[240px] h-auto md:min-h-[200px] object-cover"
							/>
							<img
								src={client1}
								alt=""
								className="w-[240px] h-auto md:min-h-[200px] object-cover"
							/>
							<img
								src={client1}
								alt=""
								className="w-[240px] h-auto md:min-h-[200px] object-cover"
							/>
							<img
								src={client1}
								alt=""
								className="w-[240px] h-auto md:min-h-[200px] object-cover"
							/>
							<img
								src={client1}
								alt=""
								className="w-[240px] h-auto md:min-h-[200px] object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CompanyInfo;
