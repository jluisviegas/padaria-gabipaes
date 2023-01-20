import React from 'react';
import { logoname } from '../assets';
import { navLinks } from '../constantes';
import SocialMedia from './SocialMedia';

const Footer = () => {
	return (
		<footer id="" className="bg-primary w-full pt-12">
			<div className="flex flex-col justify-between items-center sm:px-28 px-6 mx-auto gap-y-4">
				<ul className="list-none flex flex-col justify-start uppercase items-center flex-1 tracking-widest">
					{navLinks.map((page, url) => (
						<a
							href={page.url}
							key={page.url}
							className="text-grayIsh text-[14px] transition duration-300 hover:text-secondary hover:scale-110"
						>
							{page.title}
						</a>
					))}
				</ul>
				<SocialMedia />
				<img src={logoname} alt="" className="w-[150x] h-[120px]" />
			</div>
			<div className="bg-grayIsh flex flex-wrap justify-around items-center h-8 w-full mt-6">
				<p className="font-roboto text-[10px] sm:text-xs text-primary">
					Copyright Ⓒ 2022 . Todos os direitos reservados - Gabi Pães e Cia.
				</p>
				<p className="font-roboto text-[10px] sm:text-xs text-primary">
					Desenvolvido por Luis Viegas.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
