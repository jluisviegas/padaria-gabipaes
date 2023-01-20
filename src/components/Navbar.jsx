import { useState } from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { close, logo, menu } from '../assets';
import { styles } from '../constantes/style';
import CTA from './CTA';
import SocialMedia from './SocialMedia';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<header>
			<div className="border-b-2 border-lightYellow text-grayIsh text-lg flex items-center justify-center p-2">
				<p className="text-sm sm:text-md md:text-lg tracking-wider  uppercase">
					R. Santa Catarina, 151. Jardim Eldorado, São Luís - MA
				</p>
			</div>

			<nav
				className={`${styles.bigContainer} w-full py-4 flex justify-between items-center z-10`}
			>
				{/* Desktop */}
				<ul className="relative list-none sm:flex sm:flex-col md:flex-row hidden justify-start uppercase md:items-center flex-1 md:gap-6 tracking-widest">
					{[
						['Home', '/home'],
						['Produtos', '/produtos'],
						['Sobre', '/sobre'],
						['Clientes', '/clientes'],
					].map(([pageTitle, url]) => (
						<a
							href={url}
							key={url}
							className="text-grayIsh text-[14px] transition duration-300 hover:text-secondary hover:scale-110"
						>
							{pageTitle}
						</a>
					))}
				</ul>

				<img
					src={logo}
					alt="gabi_logo"
					className="w-[180x] h-[140px] sm:mr-6"
				/>
				<div className="list-none sm:flex sm:flex-col md:flex-row hidden justify-end items-end flex-1 gap-8 z-20">
					{/* <SocialMedia /> */}
					<CTA title="Pedido Online" icon={<AiOutlineWhatsApp />} />
				</div>

				{/* Mobile */}
				<div className="sm:hidden flex flex-1 justify-end items-center transition-transform">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[32px] h-[32px] object-contain transition-transform"
						onClick={() => setToggle((prev) => !prev)}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
