import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';

const SocialMedia = ({ display }) => {
	return (
		<div className="list-none flex justify-end items-center flex-1 gap-8">
			<a
				href="https://www.instagram.com/gabipaesecia_/"
				target="_blank"
				className="text-pink-400 text-[24px] font-semiboldtransition duration-300 hover:text-pink-700 hover:border-pink-200"
			>
				<AiOutlineInstagram />
			</a>
			<a
				href="https://www.facebook.com/GabiPaeseCia"
				target="_blank"
				className="text-blue-500 text-[24px] font-semibold transition duration-300 hover:text-blue-700 hover:border-blue-200"
			>
				<CiFacebook />
			</a>
		</div>
	);
};

export default SocialMedia;
