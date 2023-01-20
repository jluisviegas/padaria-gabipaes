import React from 'react';

const Button = ({ title, icon }) => {
	return (
		<button
			type="button"
			className="flex bg-transparent text-grayIsh items-center justify-center text-xs md:text-sm p-2 md:px-6 shadow-lg shadow-lightYellow-500/50 transition duration-300 hover:bg-primary hover:text-grayIsh border-2 border-lightYellow hover:border-white uppercase"
		>
			<a href="">{title}</a>
			<span className="text-red-600 text-lg ml-2">{icon}</span>
		</button>
	);
};

export default Button;
